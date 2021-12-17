import axios from 'axios';

export const wordsApi = axios.create({
  baseURL: process.env.REACT_APP_API_WORDS_BASE,
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_WORDS_KEY,
    'x-rapidapi-host': process.env.REACT_APP_API_WORDS_HOST,
    useQueryString: true,
  },
});

export const getRandomWord = async () => {
  const { data } = await wordsApi.get('/words/', {
    params: {
      random: true,
      letterPattern: '^[A-Za-z]+$',
    },
  });

  return data.word;
};
