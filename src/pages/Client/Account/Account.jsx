import React, {useEffect} from 'react';
import styles from './Account.module.scss';
import linksStore from '../../../store/linksStore';
import {apiGetUser} from '../../../api/api';
import store from '../../../store/store';
import CustomButton from '../../../components/CustomButton/CustomButton';

const Account = () => {
  const {linkGetUser} = linksStore;
  const {setAuthUser} = store;
    useEffect(() => {
        getInfoUser();
    }, []);

    const getInfoUser = () => {
        apiGetUser(linkGetUser).then(({data, error}) => {
            console.log(data);
            console.log(error);
        })
    };

    const signOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      setAuthUser('');
    };

  return (
    <div>
      Готовность моей квартиры
      
			<CustomButton name={'Выйти'} handleClick={signOut} />
      </div>
  )
}

export default Account;