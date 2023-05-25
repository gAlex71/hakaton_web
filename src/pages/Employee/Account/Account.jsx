import React from 'react'
import styles from './Account.module.scss';
import CustomButton from '../../../components/CustomButton/CustomButton';
import store from '../../../store/store';

const Account = () => {
  const { setAuthUser } = store;
  const goOutAcc = () => {
    setAuthUser('');
  };

  return (
    <div className={styles.container}>
        account

        <div>
            Мои обходы
            План обходов
        </div>

        <CustomButton name="Выйти" handleClick={goOutAcc}/>
    </div>
  )
}

export default Account;