import {makeAutoObservable} from "mobx";

class store{
    authUser = '';

    frames = [
        { id: 1, name: 'Корпус 1', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
        { id: 2, name: 'Корпус 2', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
        { id: 3, name: 'Корпус 3', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
        { id: 4, name: 'Корпус 4', isShow: false, sections: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5'] },
    ];

    constructor(){
        makeAutoObservable(this)
    }

    setAuthUser = (user) => {
        this.authUser = user;
    }

    setVisibleListFrame = (id) => {
        this.frames.forEach((obj) => {
            if (obj.id === id) {
                obj.isShow = !obj.isShow;
            }
        });  
    };

}

export default new store();