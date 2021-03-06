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
  isUserJoinedWithOnlyAudio: false,
};

const roomReducer = (state = initialState, action) => {
  const {
    type,
    isUserRoomCreator,
    isUserInRoom,
    roomDetails,
    activeRooms,
    localStream,
    audioOnly,
    remoteStreams,
    isScreenSharingActive,
    screenSharingStream,
    isUserJoinedWithOnlyAudio,
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

    case roomActions.SET_AUDIO_ONLY:
      return { ...state, audioOnly };

    case roomActions.SET_REMOTE_STREAMS:
      return { ...state, remoteStreams };

    case roomActions.SET_SCREEN_SHARE_STREAM:
      return {
        ...state,
        isScreenSharingActive,
        screenSharingStream,
      };

    case roomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO:
      return {
        ...state,
        isUserJoinedWithOnlyAudio,
      };

    default:
      return state;
  }
};

export default roomReducer;
