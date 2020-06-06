import http from './httpService';

export async function getSecret() {
    const { data } = await http.get('/payment/secret')
    return data.client_secret;
}