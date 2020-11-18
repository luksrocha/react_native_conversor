import axios from 'axios';

// convert?q=USD_BRL&compact=ultra&apiKey=629d445a15b4c0a3b0e8
const api = axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v5/'
})

export default api;