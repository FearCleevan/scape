import { buildOptimizedUrl } from '../../utils/cloudinary';

const CloudinaryImage = ({ 
  publicId, 
  alt, 
  width, 
  height, 
  className,
  quality = 'auto',
  format = 'auto',
  crop = 'fit', // CHANGED from 'fill' to 'fit' to maintain aspect ratio
  loading = 'lazy'
}) => {
  const imageUrl = buildOptimizedUrl(publicId, {
    width,
    height,
    quality,
    format,
    crop // Now uses 'fit' to maintain original proportions
  });

  return (
    <img 
      src={imageUrl}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
    />
  );
};

export default CloudinaryImage;