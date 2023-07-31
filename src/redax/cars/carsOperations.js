// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getCarsApi, updateCarStatusApi } from 'services/mockApi';

// export const getCars = createAsyncThunk(
//   'cars/get',
//   async (_, thunkApi) => {
//     try {
//       const data = await getCarsApi();
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: (_, { getState }) => {
//       const { items } = getState().cars;

//       if (!items.length) return true;
//       return false;
//     },
//   },
// );

// export const updateCarStatus = createAsyncThunk(
//   'cars/updateStatus',
//   async (data, { rejectWithValue }) => {
//     try {
//       const newData = await updateCarStatusApi(data);
//       return newData;
//     } catch (error) {
//       return rejectWithValue(error.meassge);
//     }
//   },
// );
