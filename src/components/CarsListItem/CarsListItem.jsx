/* eslint-disable react/prop-types */
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { updateCarStatus } from 'redax/cars/carsOperations';
import { useState } from 'react';
import s from './CarsListItem.module.scss';
import { Modal } from 'components/Modal/Modal';

export const CarsListItem = ({ carId, year, make, model, isFav }) => {


const [showModal, setShowModal] = useState(false);

const toggleModal = () => {
  setShowModal(prevState => !prevState);
};
  
  return (
    <>
      <div key={carId} className={s.cardItem} onClick={toggleModal}>
        <li>
          <p>{year}</p>
          <p>{make}</p>
          <p>{model}</p>

          <label>
            <input
              type="checkbox"
              name="status"
              checked={isFav}
              onChange={
                () => {}
                // dispatch(updateCarStatus({ carId, isFav: !isFav }))
              }
            />
            Done
          </label>
        </li>
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className={s.cardItem}>
            <li>
              <p>{year}</p>
              <p>{make}</p>
              <p>{model}</p>

              <label>
                <input
                  type="checkbox"
                  name="status"
                  checked={isFav}
                  onChange={
                    () => {}
                    // dispatch(updateCarStatus({ carId, isFav: !isFav }))
                  }
                />
                Done
              </label>
            </li>
          </div>
        </Modal>
      )}
    </>
  );
};
