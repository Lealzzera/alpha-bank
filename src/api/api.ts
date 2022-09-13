import axios from 'axios';

const instanceAxiosDollar = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/last/'
})

export const api = {
  dollarPrice: async () => {
    let response = await instanceAxiosDollar.get('/USD');
    return response.data;
  }
}