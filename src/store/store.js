import { makeAutoObservable } from 'mobx';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import e from '../assets/e.jpg';

class store {
	authUser = 'admin';

	allObjects = [
		{ id: 1, name: 'Квартал Строгино', photo: a, houses: ['Дом 11', 'Дом 12', 'Дом 13', 'Дом 14', 'Дом 15'] },
		{ id: 2, name: 'Квартал Ивакино', photo: b, houses: ['Дом 21', 'Дом 22', 'Дом 23', 'Дом 24', 'Дом 25'] },
		{ id: 3, name: 'Квартал Марьино', photo: c, houses: ['Дом 31', 'Дом 32', 'Дом 33', 'Дом 34', 'Дом 35'] },
		{ id: 4, name: 'Квартал Сабурово', photo: e, houses: ['Дом 41', 'Дом 42', 'Дом 43', 'Дом 44', 'Дом 45'] },
	];

	frames = [
		{ id: 1, name: 'Корпус 1', isShow: true, info: 'info1', sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
		{ id: 2, name: 'Корпус 2', isShow: false, info: 'info2', sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
		{ id: 3, name: 'Корпус 3', isShow: false, info: 'info3', sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
		{ id: 4, name: 'Корпус 4', isShow: false, info: 'info4', sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
	];

	employees = [
		{ id: 1, name: 'Иванов Иван' },
		{ id: 1, name: 'Иванов Миша' },
		{ id: 1, name: 'Иванов Степан' },
		{ id: 1, name: 'Иванов Андрей' },
		{ id: 1, name: 'Иванов Николай' },
	];

	constructor() {
		makeAutoObservable(this);
	}

	setAuthUser = (user) => {
		this.authUser = user;
	};

    setAllObjects = (objects = []) => {
        this.allObjects = objects;
    };

	setVisibleListFrame = (idFrame) => {
		this.frames.forEach((frame) => {
			frame.isShow = false;
		});
		
		const index = this.frames.findIndex(({ id }) => id === idFrame);
		if (index === -1) return;

		const { isShow } = this.frames[index];

		this.frames[index].isShow = !isShow;
	};
}

export default new store();
