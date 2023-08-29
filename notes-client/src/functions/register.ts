
const register = async (username: string, password: string, password2: string):Promise<boolean> => {
    if (password !== password2) return false;

    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);
    formData.append('password2', password2);
    
    await fetch('http://127.0.0.1:8000/api/register', { method: 'post', body: formData })
        .then(res => res.json())
        .then(data => {
            if (data.msg) {
                return true;
            }

            else return false;
        })
}

export { register };