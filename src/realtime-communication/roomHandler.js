import store from 'store';
import { setOpenRoom } from 'store/actions/roomActions';

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
};
