import React from 'react'
import styles from './Instruction.module.scss';
import instruction from '../../../assets/instruction.jpeg';
import { Link } from 'react-router-dom';

const Instruction = () => {
  return (
    <div className={styles.container}>
        Для обхода квартиры следуйте инструкции, указанной на картинке:

        <img src={instruction} alt=""/>

        <Link to="/employee/camera">
          Начать обход квартиры
        </Link>
    </div>
  )
}

export default Instruction;