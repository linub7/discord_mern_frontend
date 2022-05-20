import { alertActions } from 'store/actions/alertActions';

const initialState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const alertReducer = (state = initialState, action) => {
  const { type, content } = action;

  switch (type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return { ...state, showAlertMessage: true, alertMessageContent: content };

    case alertActions.CLOSE_ALERT_MESSAGE:
      return { ...state, showAlertMessage: false, alertMessageContent: null };

    default:
      return state;
  }
};

export default alertReducer;
