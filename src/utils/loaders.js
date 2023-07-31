import { defer } from 'react-router-dom';
import { getCarsApi } from 'services/mockApi';

export const catalogLoader = async () => {
  return defer({
    cars: getCarsApi(),
  });
};
