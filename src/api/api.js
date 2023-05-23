export const apiGet = async (url = '') => {
    const answer = await fetch(url);

    return answer;
}

// localStorage.getItem('token');

export const loginAuth = async (url = '', email, password) => {
    const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({ email, password }),
	};

    const answer = await fetch(url, options);

    return answer;
}