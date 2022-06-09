import { syncTypes } from './_types';

const initialState = {
  isNavigationOpen: false,
};

const navigationReducer = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case syncTypes.SET_NAVIGATION: {
      return { ...state, isNavigationOpen: !state.isNavigationOpen };
    }

    case syncTypes.SET_STORE_STATE: {
      return { ...state, ...data };
    }

    default:
      return state;
  }
};

export default navigationReducer;
