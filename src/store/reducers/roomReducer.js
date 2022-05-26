import { roomActions } from 'store/actions/roomActions';

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};

const roomReducer = (state = initialState, action) => {
  const { type, isUserRoomCreator, isUserInRoom } = action;

  switch (type) {
    case roomActions.OPEN_ROOM:
      return { ...state, isUserRoomCreator, isUserInRoom };

    default:
      return state;
  }
};

export default roomReducer;
