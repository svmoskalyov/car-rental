import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCarsApi,
  getTotalCarsApi,
  updateCarStatusApi,
} from 'services/mockApi';

export const getTotalCars = createAsyncThunk(
  'cars/getTotal',
  async (_, thunkApi) => {
    try {
      const data = await getTotalCarsApi();
      console.log('🚀 ~ --- operation --- data.length:', data.length);
      return data.length;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().cars;
      if (!items.length) return true;
      return false;
    },
  },
);

export const getCars = createAsyncThunk(
  'cars/getPage',
  async (pg, thunkApi) => {
    console.log('🚀 ~  --- operation --- page', pg);
    try {
      const data = await getCarsApi(pg);
      console.log('🚀 ~ data:', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().cars;
      if (!items.length) return true;
      return false;
    },
  },
);

export const updateCarStatus = createAsyncThunk(
  'cars/updateStatus',
  async (data, { rejectWithValue }) => {
    try {
      const newData = await updateCarStatusApi(data);
      return newData;
    } catch (error) {
      return rejectWithValue(error.meassge);
    }
  },
);
