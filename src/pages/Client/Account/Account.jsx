import React, {useEffect} from 'react';
import styles from './Account.module.scss';
import linksStore from '../../../store/linksStore';
import {apiGetUser} from '../../../api/api';

const Account = () => {
  const {linkGetUser} = linksStore;
    useEffect(() => {
        getInfoUser();
    }, []);

    const getInfoUser = () => {
        apiGetUser(linkGetUser).then(({data, error}) => {
            console.log(data);
            console.log(error);
        })
    };

  return (
    <div>Готовность моей квартиры</div>
  )
}

export default Account;