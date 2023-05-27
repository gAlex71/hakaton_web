export const createJC = async (url = '', id, name, coords, adress, date) => {
    const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			// Authorization: `Token ${token}`,
		},
		body: JSON.stringify({ id, name, coords, adress, date }),
	};

    const answer = await fetch(url, options);

    return answer;
}

export const createFrame = async (url = '', id, name, countEntries, countApartaments, countFloors) => {
    const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			// Authorization: `Token ${token}`,
		},
		body: JSON.stringify({ id, name, countEntries, countApartaments, countFloors }),
	};

    const answer = await fetch(url, options);

    return answer;
}