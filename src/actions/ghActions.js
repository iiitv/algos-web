// import axios from 'axios';

import {
  LOADING,
  LOADED,
  // ERROR,
  // AUTHOR_PROFILE
} from './types';

// import isEmpty from './../utils/validate';

export const loading = () => ({
  type: LOADING,
});

export const loaded = () => ({
  type: LOADED,
});
