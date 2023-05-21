import React, { useState } from 'react';
import styles from './Apartments.module.scss';
import ViewModal from '../../../components/ViewModal/ViewModal';
import Instruction from '../Instruction/Instruction';

const objects = [
	{ floor: 1, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 2, apartaments: ['2', '1', '3', '2', '4'] },
	{ floor: 3, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 4, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 5, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 6, apartaments: ['2', '1', '3', '2', '2'] },
	{ floor: 7, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 8, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 9, apartaments: ['2', '1', '3', '2', '4'] },
];

const Apartments = () => {
	const [floors, setFloors] = useState(objects.reverse());
	const [isOpenModal, setOpenModal] = useState(false);

	const openModalInstructions = () => {
    setOpenModal(true);
  };

  const closeModalInstructions = () => {
    setOpenModal(false);
  }

	return (
		<div className={styles.container}>
			<div className={styles.title}>Выберите квартиру для обхода</div>

			<div className={styles.list}>
				{floors.map(({ floor, apartaments }) => {
					return (
						<div className={styles.floor} key={floor}>
							{floor}
							{apartaments.map((apartament) => {
								return (
									<div className={styles.apartament} key={apartament} onClick={openModalInstructions}>
										{apartament}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>

			<ViewModal 
        title="Следуйте инструкцям по обходу квартир" 
        isModal={isOpenModal} 
        closeModal={closeModalInstructions}
      >
				{/* <CreateObject closeModal={closeModalInstructions} /> */}
        <Instruction closeModal={closeModalInstructions}/>
			</ViewModal>
		</div>
	);
};

export default Apartments;
