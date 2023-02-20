import axios from 'axios';

axios.defaults.baseURL = `https://api.apilayer.com/exchangerates_data`;
const API_KEY = 'NzJxoBDal3rMXth209xmrMTkbPzOx80p';
// const headers = { apikey: API_KEY };


export const getSymbols = async () => {
  const response = await axios.get(
    `/symbols?apikey=${API_KEY}`
  );
  return response.data;
};

export const getDate = async (date, base) => {
  const response = await axios.get(`/${date}?apikey=${API_KEY}&base=${base}`);
  return response.data;
};
