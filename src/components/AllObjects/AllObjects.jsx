import styles from './AllObjects.module.scss';
import store from '../../store/store';

const AllObjects = ({handleSelectObject = () => {}}) => {
    const {allObjects} = store;

    return (
        <div className={styles.container}>
            <div className={styles.cards} >
				{allObjects.map(({ id, name, photo, houses }) => {
					return (
						<div 
                            key={id} 
                            className={styles.card} 
                            onClick={() => handleSelectObject(id)}
                        >
							<img className={styles.photo} src={photo} alt=''/>

							<div>{name}</div>
							{/* {houses.map((house) => {
								return <div>{house}</div>;
							})} */}
						</div>
					);
				})}
			</div>
        </div>
    )
};

export default AllObjects;