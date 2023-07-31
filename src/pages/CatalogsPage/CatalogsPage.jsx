import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { useLoaderData } from 'react-router-dom';
import s from './CatalogsPage.module.scss';
import { useState } from 'react';
import { getCarsApi } from 'services/mockApi';

export const CatalogsPage = () => {
  const { cars } = useLoaderData();
  const [catalog, setCatalog] = useState([]);
  console.log('🚀 ~ CatalogsPage ~ catalog:', catalog);
  const [BtnLoadMoreIs, setBtnLoadMoreIs] = useState(true);
  const [page, setPage] = useState(2);
  console.log('🚀 ~ CatalogsPage ~ page:', page);

  const onClickLoadMore = async () => {
    if (catalog.length === 0) {
      setCatalog(cars._data);
    }

    const car = await getCarsApi(page);
    setCatalog(prevState => [...prevState, ...car]);
    setPage(prevState => prevState + 1);

    if (car.length < 8) {
      setBtnLoadMoreIs(false);
    }
  };

  return (
    <>
      <CarsList catalog={catalog.length === 0 ? cars : catalog} />

      {BtnLoadMoreIs && (
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

// async function getCars(page = 1) {
//   // console.log('--- getCars');
//   // console.log('🚀 ~ getCars ~ page:', page);

//   const url = new URL('https://64c3e72367cfdca3b66070c2.mockapi.io/adverts');
//   url.searchParams.append('completed', false);
//   url.searchParams.append('page', page);
//   url.searchParams.append('limit', 8);

//   const res = await fetch(url);
//   return res.json();
// }

// async function getCars() {
//   const res = await fetch(
//     'https://64c3e72367cfdca3b66070c2.mockapi.io/adverts',
//   );
//   return res.json();
// }

// export const catalogLoader = async () => {
//   // console.log('--- catalogLoader');
//   // console.log({ request, params });
//   // const res = await fetch(
//   //   'https://64c3e72367cfdca3b66070c2.mockapi.io//adverts',
//   // );
//   // return res.json();

//   return defer({
//     cars: getCarsApi(),
//   });
//   // return defer({
//   //   cars: getCars(),
//   // });
// };
