import React from 'react'
import styles from './CreateObject.module.scss';

const CreateObject = ({closeModal}) => {

    const createNewObject = () => {
        console.log('Создать');
        closeModal();
    };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <input placeholder='Название'/>
        <input placeholder='Адрес'/>
        <input placeholder='Срок сдачи'/>

        <button onClick={createNewObject}>Создать</button>
    </div>
  )
}

export default CreateObject;