import http from './httpService';
import config from '../config/config.json';

export async function saveUser(user) {
    const { data } = await http.post('/users/', user)
    return data;
}

export async function updateUser(user) {
    return http.put('/users/' + user._id, {
        name: user.title,
        email: user.content,
        password: user.source
    });
}

export async function getUsers() {
    const { data } = await http.get('/users/');
    return data;
}

export async function getUser(id) {
    const { data } = await http.get('/users/' + id);
    return data;
}

export function deleteUser(userId) {
    return http.delete('/users/' + userId);
}