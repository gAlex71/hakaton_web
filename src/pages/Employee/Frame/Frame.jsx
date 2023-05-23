import React from 'react';
import styles from './Frame.module.scss';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ListItemButton, ListItemText, Collapse, List } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';

const Frame = observer(() => {
	const {frames, setVisibleListFrame} = store;

	const {object} = useParams();
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<Link to='/employee'>Назад</Link>
			Выберите корпус
			{frames.map(({ id, name, sections, isShow }) => {
				return (
					<List key={id}>
						<ListItemButton key={id} onClick={() => setVisibleListFrame(id)}>
							<ListItemText primary={name} />
							{isShow ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>

						<Collapse in={isShow} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{sections.map((section) => {
									return (
										<ListItemButton
											key={section}
											sx={{ pl: 4 }}
											onClick={() => navigate(`/employee/${object}/${id}`)}
										>
											<ListItemText primary={section} />
										</ListItemButton>
									);
								})}
							</List>
						</Collapse>
					</List>
				);
			})}
		</div>
	);
});

export default Frame;
