import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = (arg) => {
    notification.open({
        message: arg,
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};

/*
  Global error intercpter
*/
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

console.log("env : ", process.env.REACT_APP_API_URL);

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        //Sentry.captureException(error);
        // alert("An unexpected error occurred");
        openNotification("An unexpected error occurred")
    }

    return Promise.reject(error);
})

// On appple ca dans  auth service pour set ca pour que quand on fait des request http au serveur on inclu le jwt pour les protected APIs
function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
}