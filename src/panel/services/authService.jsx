import http from './httpService';
import config from '../config/config.json';
import jwtDecod from 'jwt-decode';

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post('/auth', { email, password })
    localStorage.setItem("token", jwt);
}

export function logout() {
    localStorage.removeItem("token");
}

export function loginWithAwt(jwt) {
    localStorage.setItem("token", jwt)
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecod(jwt);

    } catch (error) {
        return null; // that means we don't have a user
    }
}

export function getJwt() {
    localStorage.getItem("token");
}

export default {
    login,
    logout,
    loginWithAwt,
    getCurrentUser
}