export const apiGet = async (url = '') => {
    const answer = await fetch(url);

    return answer;
}

export const loginAuth = (url = '') => {
    
}