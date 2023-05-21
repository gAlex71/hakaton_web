import React from 'react'
import styles from './Instruction.module.scss';
import instruction from '../../../assets/instruction.jpeg';
import { useNavigate } from 'react-router-dom';

const Instruction = ({closeModal}) => {
  const navigate = useNavigate();

  const handleStart = () => {
      closeModal();
      navigate('/employee/camera');
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={instruction} alt=""/>

        <button onClick={handleStart}>
          Начать обход квартиры
        </button>
    </div>
  )
}

export default Instruction;