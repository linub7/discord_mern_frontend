import Cookies from 'js-cookie';
import { authActions } from 'store/actions/authActions';

const initialState = {
  userDetails: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
};

const authReducer = (state = initialState, action) => {
  const { type, userDetails } = action;

  switch (type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails,
      };

    default:
      return state;
  }
};

export default authReducer;
