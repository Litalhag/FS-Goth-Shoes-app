import { useContext } from 'react';

import { ShoeContext } from '../context/ShoeContext.jsx';

export const useGlobalShoeContext = () => {
  return useContext(ShoeContext);
};
