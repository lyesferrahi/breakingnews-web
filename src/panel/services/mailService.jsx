import http from './httpService';

export async function sendContactForm(question) {
    console.log(question)
    const { data } = await http.post('/users/send', question)
    return data;
}
