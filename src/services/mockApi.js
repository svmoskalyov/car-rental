import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_DB_HOST;

export const getTotalCarsApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};

export const getCarsApi = async (page = 1) => {
  const response = await axios.get('/adverts', {
    params: {
      page,
      limit: 8,
    },
  });
  return response.data;
};

export const updateCarStatusApi = async ({ id, isFav }) => {
  const response = await axios.put(`/adverts/${id}`, { isFav });
  return response.data;
};
