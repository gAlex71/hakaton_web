import React from 'react'
import styles from './Instruction.module.scss';
import instruction from '../../../assets/instruction.jpeg';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../components/CustomButton/CustomButton';

const Instruction = ({closeModal}) => {
  const navigate = useNavigate();

  const handleStart = () => {
      closeModal();
      navigate('/employee/camera');
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <img className={styles.visible} src={instruction} alt=""/>

        <CustomButton name='Начать обход квартиры' handleClick={handleStart}/>
    </div>
  )
}

export default Instruction;