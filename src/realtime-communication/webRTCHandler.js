import store from 'store';
import { setLocalStream, setRemoteStreams } from 'store/actions/roomActions';
import Peer from 'simple-peer';
import { signalPeerData } from './socketConnection';

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO user TURN server credentials
  } else {
    console.warn('Using only STUN server');
    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

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

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log('preparing new peer connection as initiator');
  } else {
    console.log('preparing new peer connection as not initiator');
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    stream: localStream,
    config: getConfiguration(),
  });

  peers[connUserSocketId].on('signal', (data) => {
    const signalData = {
      signal: data,
      connUserSocketId,
    };

    // pass signaling data to other user
    signalPeerData(signalData);
  });

  peers[connUserSocketId].on('stream', (remoteStream) => {
    // TODO:
    // add new remote stream to our server store
    console.log('remote stream came from other user');
    console.log('direct connection is established');

    remoteStream.connUserSocketId = connUserSocketId;

    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { signal, connUserSocketId } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

export const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;

  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams));
};