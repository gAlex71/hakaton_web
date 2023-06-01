export const apiPostFile = async (url = '',file, apartament) => {
	const serverData = {
		ans: { status: null, statusText: '' },
		error: { isError: false, errorText: '' },
		data: [],
	};

    const formData = new FormData();
	formData.append('data', JSON.stringify({flat: apartament}));
    // formData.append('video', file);

	console.log(formData);

	const options = {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
        // body: formData,
		body: JSON.stringify({flat: apartament}),
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