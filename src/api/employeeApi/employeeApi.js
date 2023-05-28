export const apiPostFile = async (url = '', file, data) => {
	const serverData = {
		ans: { status: null, statusText: '' },
		error: { isError: false, errorText: '' },
		data: [],
	};

    const formData = new FormData();
    formData.append('file', file);

	const options = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
        body: JSON.stringify({ formData, data }),
	};

	try {
		const answer = await fetch(url, options);

		const { status, statusText } = answer;
		const { ans } = serverData;

		serverData.ans = { ...ans, status, statusText };

		serverData.data = await answer.json();
	} catch (error) {
		serverData.error = { isError: true, errorText: error.message };
	}

	return serverData;
};