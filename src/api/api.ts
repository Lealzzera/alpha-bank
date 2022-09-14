import axios from 'axios';

const instanceAxiosCoin = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/last/'
})

export const api = {
  dollarPrice: async () => {
    let response = await instanceAxiosCoin.get('/USD');
    return response.data;
  },
  euroPrice: async () => {
    let response = await instanceAxiosCoin.get('/EUR')
    return response.data;
  },
  bitCoinPrice: async () => {
    let response = await instanceAxiosCoin.get('/BTC');
    return response.data;
  },
  ethereumPrice: async () => {
    let response = await instanceAxiosCoin.get('/ETH');
    return response.data;
  }
}