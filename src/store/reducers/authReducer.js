const initialState = {
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'DUMMY':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;