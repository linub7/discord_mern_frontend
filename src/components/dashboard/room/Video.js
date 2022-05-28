import { styled } from '@mui/system';
import { useEffect, useRef } from 'react';

const MainContainer = styled('div')({
  height: '50%',
  width: '50%',
  backgroundColor: 'black',
  borderRadius: '8px',
});

const VideoElement = styled('video')({
  width: '100%',
  height: '100%',
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <MainContainer>
      <VideoElement
        ref={videoRef}
        autoPlay
        muted={isLocalStream ? true : false}
      />
    </MainContainer>
  );
};

export default Video;
