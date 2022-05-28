import store from 'store';
import { setLocalStream } from 'store/actions/roomActions';

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  audio: true,
  video: true,
};

export const getLocalStreamPreview = (onlyAudio, callbackFn) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      console.log(stream);
      store.dispatch(setLocalStream(stream));
      callbackFn();
    })
    .catch((error) => {
      console.log(error);
      console.log('Cannot get access to local stream');
    });
};
