import store from 'store';
import {
  setActiveRooms,
  setOpenRoom,
  setRoomDetails,
} from 'store/actions/roomActions';
import * as socketConnection from './socketConnection';

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));

  socketConnection.createNewRoom();
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
