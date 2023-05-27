import React, { useEffect } from 'react';
import {apiGetUser} from '../../../api/api';
import linksStore from '../../../store/linksStore';

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
    <div>Account</div>
  )
}

export default Account;