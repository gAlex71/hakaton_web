import { makeAutoObservable } from 'mobx';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import e from '../assets/e.jpg';

class store {
	authUser = 'admin';

	allObjects = [
		{ id: 1, name: 'Квартал Строгино', photo: a, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
		{ id: 2, name: 'Квартал Ивакино', photo: b, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
		{ id: 3, name: 'Квартал Марьино', photo: c, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
		{ id: 4, name: 'Квартал Сабурово', photo: e, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	];

	frames = [
		{ id: 1, name: 'Корпус 1', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
		{ id: 2, name: 'Корпус 2', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
		{ id: 3, name: 'Корпус 3', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
		{ id: 4, name: 'Корпус 4', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
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

	setVisibleListFrame = (id) => {
		this.frames.forEach((obj) => {
			if (obj.id === id) {
				obj.isShow = !obj.isShow;
			}
		});
	};
}

export default new store();
