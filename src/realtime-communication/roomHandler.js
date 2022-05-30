import store from 'store';
import {
  setActiveRooms,
  setLocalStream,
  setOpenRoom,
  setRoomDetails,
  setRemoteStreams,
  setScreenSharingStream,
  setIsUserJoinedWithOnlyAudio,
} from 'store/actions/roomActions';
import * as socketConnection from './socketConnection';
import { closeAllConnections, getLocalStreamPreview } from './webRTCHandler';

export const createNewRoom = () => {
  // this logic only work when we successfully get an access to the localStream
  const audioOnly = store.getState().room.audioOnly;

  const successCallbackFn = () => {
    store.dispatch(setOpenRoom(true, true));
    store.dispatch(setIsUserJoinedWithOnlyAudio(audioOnly));
    socketConnection.createNewRoom();
  };

  getLocalStreamPreview(audioOnly, successCallbackFn);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;

  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  const friends = store.getState().friends.friends;
  const rooms = [];

  activeRooms?.forEach((room) => {
    const isRoomCreatedByMe =
      room.roomDetails?.roomCreator.userId ===
      store.getState().auth.userDetails?._id;
    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creatorUsername: 'Me' });
    } else {
      friends.forEach((friend) => {
        if (friend.id === room.roomCreator.userId) {
          rooms.push({ ...room, creatorUsername: friend.username });
        }
      });
    }
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const audioOnly = store.getState().room.audioOnly;
  const successCallbackFn = () => {
    store.dispatch(setRoomDetails({ roomId }));

    store.dispatch(setIsUserJoinedWithOnlyAudio(audioOnly));
    store.dispatch(setOpenRoom(false, true));

    socketConnection.joinRoom({ roomId });
  };

  getLocalStreamPreview(audioOnly, successCallbackFn);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStream;

  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;

  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }

  store.dispatch(setRemoteStreams([]));
  closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
