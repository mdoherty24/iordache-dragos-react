import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://rotterdam-v1.herokuapp.com/api',
});

export const register = async (name, email, password) => {
  try {
    const response = await authApi.post('/register', {
      name,
      email,
      password,
      password_confirmation: password,
    });

    console.log(response);

    return response.data;
  } catch (response) {
    console.log(response);

    return response;
  }
};

export default authApi;
