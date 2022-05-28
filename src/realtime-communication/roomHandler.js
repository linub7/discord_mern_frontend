import store from 'store';
import {
  setActiveRooms,
  setLocalStream,
  setOpenRoom,
  setRoomDetails,
} from 'store/actions/roomActions';
import * as socketConnection from './socketConnection';
import { getLocalStreamPreview } from './webRTCHandler';

export const createNewRoom = () => {
  // this logic only work when we successfully get an access to the localStream
  const successCallbackFn = () => {
    store.dispatch(setOpenRoom(true, true));

    socketConnection.createNewRoom();
  };

  const audioOnly = store.getState().room.audioOnly;

  getLocalStreamPreview(audioOnly, successCallbackFn);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;

  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  console.log(activeRooms);

  const friends = store.getState().friends.friends;
  const rooms = [];

  activeRooms.forEach((room) => {
    friends.forEach((friend) => {
      if (friend.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUsername: friend.username });
      }
    });
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFn = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));

    socketConnection.joinRoom({ roomId });
  };

  const audioOnly = store.getState().room.audioOnly;

  getLocalStreamPreview(audioOnly, successCallbackFn);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStream;

  if (localStream) {
    localStream.getTracks().forEach((track) => {
      track.stop();
    });
    store.dispatch(setLocalStream(null));
  }

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
