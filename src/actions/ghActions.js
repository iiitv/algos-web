// import axios from 'axios';

import {
  LOADING,
  LOADED,
  // ERROR,
  // AUTHOR_PROFILE
} from './types';

// import isEmpty from './../utils/validate';

export const loading = () => {
  return {
    type: LOADING
  };
};

export const loaded = () => {
  return {
    type: LOADED
  };
};
