import { syncTypes } from './_types';

const initialState = {
  isNavigationOpen: false,
};

const isBoolean = e => e === true || e === false;

const navigationReducer = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case syncTypes.SET_NAVIGATION: {
      return {
        ...state,
        isNavigationOpen: isBoolean(data.isOpen)
          ? data.isOpen
          : !state.isNavigationOpen,
      };
    }

    case syncTypes.SET_STORE_STATE: {
      return { ...state, ...data };
    }

    default:
      return state;
  }
};

export default navigationReducer;
