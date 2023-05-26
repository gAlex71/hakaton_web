import React from 'react'
import styles from './Account.module.scss';
import CustomButton from '../../../components/CustomButton/CustomButton';
import store from '../../../store/store';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';

const Account = () => {
  const { setAuthUser } = store;
  const goOutAcc = () => {
    setAuthUser('');
  };

  return (
    <div className={styles.container}>
        Иван Иванов

            Мои обходы

            <ListCompleted />

        <CustomButton name="Выйти" handleClick={goOutAcc}/>
    </div>
  )
}

export default Account;