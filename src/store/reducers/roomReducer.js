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
  const {
    type,
    isUserRoomCreator,
    isUserInRoom,
    roomDetails,
    activeRooms,
    localStream,
  } = action;

  switch (type) {
    case roomActions.OPEN_ROOM:
      return { ...state, isUserRoomCreator, isUserInRoom };

    case roomActions.SET_ROOM_DETAILS:
      return { ...state, roomDetails };

    case roomActions.SET_ACTIVE_ROOMS:
      return { ...state, activeRooms };

    case roomActions.SET_LOCAL_STREAM:
      return { ...state, localStream };

    default:
      return state;
  }
};

export default roomReducer;
