/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCarStatus } from 'redax/cars/carsOperations';
import { Modal } from 'components/Modal/Modal';
import s from './CarsListItem.module.scss';

export const CarsListItem = ({ id, year, make, model, isFav }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <div key={id} className={s.cardItem}>
        <div onClick={toggleModal}>image</div>
        <li>
          <p>{year}</p>
          <p>{make}</p>
          <p>{model}</p>

          <label>
            <input
              type="checkbox"
              name="status"
              checked={isFav}
              onChange={() =>
                dispatch(updateCarStatus({ id, isFav: !isFav }))
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
            </li>
          </div>
        </Modal>
      )}
    </>
  );
};
