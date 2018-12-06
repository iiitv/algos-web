import {
  LOADING,
  LOADED,
  AUTHOR_PROFILE,
  ERROR
} from '../actions/types';

const initialState = {
  loading: false,
  authorProfile: {},
  errors: {
    error: []
  }
};

export default function(state = initialState, action) {
	switch (action.type) {
    case AUTHOR_PROFILE:
			return {
        ...state,
        userProfile: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOADED:
      return {
        ...state,
        loading: false
      };
    case ERROR:
      return {
        ...state,
        errors: action.payload
      };
		default:
			return state;
	}
}
