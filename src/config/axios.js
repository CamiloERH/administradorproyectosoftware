import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL: 'https://agendaappserver.herokuapp.com/'
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;