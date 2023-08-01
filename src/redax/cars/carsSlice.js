import { createSlice } from '@reduxjs/toolkit';
import { getCars, getTotalCars, updateCarStatus } from './carsOperations';

const initialState = {
  items: [],
  favorites: [],
  totalCars: 0,
  page: 0,
  isLoading: false,
  error: null,
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
        state.totalCars = payload.length;
        if (state.favorites.length === 0) {
          state.favorites = payload.filter(el =>
            el.isFav === true ? el : null,
          );
        }
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, ...payload.data];
        state.page = payload.pg;
      })
      .addCase(updateCarStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map(el =>
          el.id !== payload.id ? el : { ...el, ...payload },
        );
        payload.isFav
          ? state.favorites.push(payload)
          : (state.favorites = state.favorites.filter(
              el => el.id !== payload.id,
            ));
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
