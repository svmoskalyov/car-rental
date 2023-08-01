import { createSlice } from '@reduxjs/toolkit';
import { getCars, getTotalCars, updateCarStatus } from './carsOperations';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
  totalCars: 0,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  // reducers: {
  //   add(state, { payload }) {
  //     return {
  //       ...state,
  //       items: [payload, ...state.items],
  //     };
  //   },
  //   remove(state, { payload }) {
  //     return {
  //       ...state,
  //       items: state.items.filter(el => el.id !== payload),
  //     };
  //   },
  //   updateStatus(state, { payload }) {
  //     return {
  //       ...state,
  //       items: state.items.map(el =>
  //         el.id !== payload ? el : { ...el, isFav: !el.isFav },
  //       ),
  //     };
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(getTotalCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalCars = payload;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, ...payload];
      })
      .addCase(updateCarStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map(el =>
          el.id !== payload.id ? el : { ...el, ...payload },
        );

        const index = state.items.findIndex(car => car.id === payload.id);
        state.items.splice(index, 1, payload);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('cars') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

// export const { add, remove, updateStatus } = carsSlice.actions;
export default carsSlice.reducer;
