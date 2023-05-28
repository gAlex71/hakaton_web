import { makeAutoObservable } from 'mobx';

class linkStore {
    linkLogin = 'http://87.244.7.150:8000/api/user/login/';
	linkGetUser = 'http://87.244.7.150:8000/api/user/me/';
	linkGetProjects = 'http://87.244.7.150:8000/api/core/projects/';

	constructor() {
		makeAutoObservable(this);
	}
}

export default new linkStore();