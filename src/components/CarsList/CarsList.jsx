/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import s from './CarsList.module.scss';
import { CarsListItem } from 'components/CarsListItem/CarsListItem';

export const CarsList = ({ catalog }) => {
  return (
    <ul className={s.cardList}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={catalog}>
          {resolvedCars =>
            resolvedCars.map(el => {
              return <CarsListItem key={el.carId} {...el} />;
            })
          }
        </Await>
      </Suspense>
    </ul>
  );

  // return (
  //   <ul className={s.cardList}>
  //     <Suspense fallback={<h2>Loading...</h2>}>
  //       <Await resolve={catalog}>
  //         {resolvedCars =>
  //           resolvedCars.map(({ carId, year, make, model, isFav }) => {
  //             return (
  //               <Link key={carId} className={s.cardItem}>
  //                 <li>
  //                   <p>{year}</p>
  //                   <p>{make}</p>
  //                   <p>{model}</p>

  //                   <label className={s.status}>
  //                     <input
  //                       type="checkbox"
  //                       name="status"
  //                       checked={isFav}
  //                       onChange={() =>
  //                         dispatch(updateCarStatus({ carId, isFav: !isFav }))
  //                       }
  //                     />
  //                     Done
  //                   </label>
  //                 </li>
  //               </Link>
  //             );
  //           })
  //         }
  //       </Await>
  //     </Suspense>
  //   </ul>
  // );
};
