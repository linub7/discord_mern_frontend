import { chatActions } from 'store/actions/chatActions';

const initialState = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  const { chatDetails, chatType, messages, type } = action;

  switch (type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chatType,
        chosenChatDetails: chatDetails,
        messages: [],
      };

    case chatActions.SET_MESSAGES:
      return { ...state, messages };

    default:
      return state;
  }
};

export default chatReducer;
