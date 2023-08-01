import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectTotalCars,
} from 'redax/cars/carsSelectors';
import { getCars, getTotalCars } from 'redax/cars/carsOperations';
import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import s from './CatalogsPage.module.scss';

export const CatalogsPage = () => {
  const dispatch = useDispatch();
  const initialized = useRef(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const catalog = useSelector(selectCars);
  const totalCars = useSelector(selectTotalCars);
  const [page, setPage] = useState(0);

  const onClickLoadMore = () => {
    dispatch(getCars(page));
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      if (catalog.length === 0) {
        dispatch(getCars(1));
        setPage(2);
      }

      dispatch(getTotalCars());
    }
  }, [catalog.length, dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <CarsList catalog={catalog} />

      {catalog.length < totalCars && (
        <Button
          className={s.btnLoadMore}
          onClick={onClickLoadMore}
          aria-label="button load more"
        >
          Load more
        </Button>
      )}
    </>
  );
};
