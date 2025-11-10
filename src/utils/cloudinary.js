// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  baseUrl: 'https://res.cloudinary.com'
};

// Build optimized Cloudinary URL for images
export const buildOptimizedUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fit'
  } = options;

  const transformations = [
    quality && `q_${quality}`,
    format && `f_${format}`,
    width && `w_${width}`,
    height && `h_${height}`,
    crop && `c_${crop}`
  ].filter(Boolean).join(',');

  const transformationString = transformations ? `${transformations}/` : '';

  return `${CLOUDINARY_CONFIG.baseUrl}/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transformationString}${publicId}`;
};

// CORRECTED public IDs based on your actual uploaded structure
export const IMAGE_ASSETS = {
  landscape: 'scape/landscape/scape/landscape/landscape1',
  hardscape: 'scape/hardscape/scape/hardscape/hardscape1',
  softscape: 'scape/softscape/scape/softscape/softscape1',
  poolscape: 'scape/poolscape/scape/poolscape/poolscape1',
  nightscape: 'scape/nightscape/scape/nightscape/nightscape1',
  waterscape: 'scape/waterscape/scape/waterscape/waterscape1',
  firescape: 'scape/firescape/scape/firescape/firescape1',
  courtscape: 'scape/courtscape/scape/courtscape/courtscape2'
};