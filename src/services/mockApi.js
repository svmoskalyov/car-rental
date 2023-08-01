import axios from 'axios';

axios.defaults.baseURL = 'https://64c3e72367cfdca3b66070c2.mockapi.io';

// export const addCarsApi = async values => {
//   const response = await axios.post('/adverts', values);
//   return response.data;
// };

export const getTotalCarsApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};

export const getCarsApi = async (page = 1) => {
  console.log('🚀 ~ getCarsApi ~ page:', page);
  const response = await axios.get('/adverts', {
    params: {
      page,
      limit: 8,
    },
  });

  return response.data;
};

export const updateCarStatusApi = async ({ carId, isFav }) => {
  console.log('🚀 ~ updateCarStatusApi ~ carId:', carId);
  console.log('🚀 ~ updateCarStatusApi ~ isFav:', isFav);

  // const response = await axios
  //   .patch(`/adverts/${id}`, { isFav })
  //   .then(({ data }) => ({ ...data, id }));

  // const response = await axios.put(`/adverts/${carId}`, {
  //   isFav: !isFav,
  // });

  const response = await axios.put(`/adverts/${carId}`, { isFav });

  console.log('🚀 ~ updateCarStatusApi ~ response:', response);
  console.log('🚀 ~ updateCarStatusApi ~ response:', response.data);

  return response.data;
};
