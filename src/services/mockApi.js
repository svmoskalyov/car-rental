import axios from 'axios';

axios.defaults.baseURL = 'https://64c3e72367cfdca3b66070c2.mockapi.io';

// export const addCarsApi = async values => {
//   const response = await axios.post('/adverts', values);
//   return response.data;
// };

export const getCarsApi = async (page = 1) => {
  console.log('🚀 ~ getCarsApi ~ page:', page);
  const response = await axios.get('/adverts', {
    params: {
      page,
      limit: 8,
    },
  });

  return response.data;

  // const url = new URL('https://64c3e72367cfdca3b66070c2.mockapi.io/adverts');
  // url.searchParams.append('completed', false);
  // url.searchParams.append('page', page);
  // url.searchParams.append('limit', 8);
  // const res = await fetch(url);
  // return res.json();
};

// export const updateCarStatusApi = async ({ id, isFav }) => {
//   const response = await axios
//     .patch(`/adverts/${id}`, { isFav })
//     .then(({ data }) => ({ ...data, id }));

//   console.log('🚀 ~ updateCarStatusApi ~ response:', response);
//   console.log('🚀 ~ updateCarStatusApi ~ response:', response.data);

//   return response.data;
// };
