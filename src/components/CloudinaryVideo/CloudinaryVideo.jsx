import { useRef, useEffect } from 'react';
import { buildOptimizedVideoUrl } from '../../utils/cloudinaryVideo';

const CloudinaryVideo = ({ 
  publicId, 
  className,
  playbackRate = 1.0,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  quality = 'auto',
  format = 'auto',
  width,
  height
}) => {
  const videoRef = useRef(null);

  const videoUrl = buildOptimizedVideoUrl(publicId, {
    quality,
    format,
    width,
    height
  });

  useEffect(() => {
    if (videoRef.current && playbackRate !== 1.0) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={className}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default CloudinaryVideo;