// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  baseUrl: 'https://res.cloudinary.com'
};

// Build optimized Cloudinary Video URL
export const buildOptimizedVideoUrl = (publicId, options = {}) => {
  const {
    quality = 'auto',
    format = 'auto',
    width,
    height
  } = options;

  const transformations = [
    quality && `q_${quality}`,
    format && `f_${format}`,
    width && `w_${width}`,
    height && `h_${height}`,
    'vc_auto' // Video codec auto
  ].filter(Boolean).join(',');

  const transformationString = transformations ? `${transformations}/` : '';

  return `${CLOUDINARY_CONFIG.baseUrl}/${CLOUDINARY_CONFIG.cloudName}/video/upload/${transformationString}${publicId}`;
};

// Video public IDs based on what you already uploaded
export const VIDEO_ASSETS = {
  background1: 'scape/videos/Background1',
  background2: 'scape/videos/Background2', 
  background3: 'scape/videos/Background3',
  background4: 'scape/videos/Background4'
};