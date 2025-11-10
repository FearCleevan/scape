import { config, v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary using process.env (Node.js)
config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

console.log('🔐 Cloudinary Configuration:');
console.log('Cloud Name:', process.env.VITE_CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.VITE_CLOUDINARY_API_KEY);
console.log('Upload Preset:', process.env.VITE_CLOUDINARY_UPLOAD_PRESET);
console.log('----------------------------------------\n');

// Updated folder mapping based on your actual folder structure
const folderMapping = {
  'ArProject': 'scape/projects/arproject',
  'BennettProject': 'scape/projects/bennett',
  'courtscape': 'scape/courtscape',
  'firescape': 'scape/firescape', 
  'GaleProject': 'scape/projects/gale',
  'gallery': 'scape/gallery',
  'GaProject': 'scape/projects/ga',
  'GardnerProject': 'scape/projects/gardner',
  'HaProject': 'scape/projects/ha',
  'hardscape': 'scape/hardscape',
  'images': 'scape/images',
  'KentChristensenProject': 'scape/projects/kent-christensen',
  'landscape': 'scape/landscape',
  'nightscape': 'scape/nightscape',
  'poolscape': 'scape/poolscape',
  'services': 'scape/services',
  'softscape': 'scape/softscape',
  'TcProject': 'scape/projects/tc',
  'teams': 'scape/teams',
  'videos': 'scape/videos',
  'waterscape': 'scape/waterscape',
};

const uploadFile = async (filePath, cloudinaryFolder, fileName) => {
  const publicId = `${cloudinaryFolder}/${path.parse(fileName).name}`;
  
  // Check if it's a video file
  const isVideo = filePath.match(/\.(mp4|mov|avi|webm)$/i);
  
  try {
    const uploadOptions = {
      public_id: publicId,
      folder: cloudinaryFolder,
      resource_type: 'auto',
      overwrite: false,
      upload_preset: process.env.VITE_CLOUDINARY_UPLOAD_PRESET
    };

    // Add video-specific optimizations
    if (isVideo) {
      uploadOptions.quality = 'auto';
      uploadOptions.fetch_format = 'auto';
    } else {
      // Image optimizations
      uploadOptions.quality = 'auto';
      uploadOptions.fetch_format = 'auto';
    }

    const result = await cloudinary.uploader.upload(filePath, uploadOptions);
    
    console.log(`✅ Uploaded: ${fileName} ${isVideo ? '🎥' : '🖼️'}`);
    console.log(`   📍 Public ID: ${result.public_id}`);
    return result.public_id;
  } catch (error) {
    console.error(`❌ Failed to upload ${fileName}:`, error.message);
    return null;
  }
};



const uploadFolder = async (localFolder, cloudinaryFolder) => {
  const folderPath = path.join('./src/assets', localFolder);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️ Skipping ${localFolder} - folder doesn't exist`);
    return [];
  }

  const files = fs.readdirSync(folderPath);
  const mediaFiles = files.filter(file => 
    file.match(/\.(jpg|jpeg|png|gif|webp|mp4|mov|avi|JPG|JPEG|PNG)$/i)
  );

  if (mediaFiles.length === 0) {
    console.log(`⚠️ No media files found in ${localFolder}`);
    return [];
  }

  console.log(`\n📁 Uploading ${mediaFiles.length} files from ${localFolder}`);
  console.log(`   📂 Cloudinary Folder: ${cloudinaryFolder}`);

  const uploadedIds = [];
  
  for (const file of mediaFiles) {
    const filePath = path.join(folderPath, file);
    
    // Check if file exists and is readable
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filePath}`);
      continue;
    }
    
    const publicId = await uploadFile(filePath, cloudinaryFolder, file);
    
    if (publicId) {
      uploadedIds.push(publicId);
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 800));
  }

  return uploadedIds;
};

const uploadAllAssets = async () => {
  console.log('🚀 Starting bulk upload to Cloudinary...\n');
  console.log('📝 This will upload all images while maintaining folder structure');
  console.log('⏳ Please be patient, this may take several minutes...\n');

  const allUploadedAssets = {};

  for (const [localFolder, cloudinaryFolder] of Object.entries(folderMapping)) {
    const uploadedIds = await uploadFolder(localFolder, cloudinaryFolder);
    allUploadedAssets[localFolder] = uploadedIds;
    
    console.log(`\n--- ✅ Completed ${localFolder}: ${uploadedIds.length} files ---\n`);
  }

  // Generate assets configuration file
  generateAssetsConfig(allUploadedAssets);
  
  console.log('🎉 All assets uploaded successfully!');
  console.log('📋 Generated src/data/cloudinaryAssets.js with all public IDs');
  console.log('\n🔍 You can view your uploaded assets at: https://console.cloudinary.com/console/media-library');
};

const generateAssetsConfig = (uploadedAssets) => {
  const configContent = `// Auto-generated Cloudinary Assets Configuration
// This file contains all uploaded asset public IDs
// Generated on: ${new Date().toISOString()}

export const cloudinaryAssets = ${JSON.stringify(uploadedAssets, null, 2)};

// Helper function to get assets by category
export const getAssetsByCategory = (category) => {
  return cloudinaryAssets[category] || [];
};

// Helper function to get project assets  
export const getProjectAssets = (projectName) => {
  const projectMap = {
    'arproject': 'ArProject',
    'bennett': 'BennettProject',
    'gale': 'GaleProject', 
    'ga': 'GaProject',
    'gardner': 'GardnerProject',
    'ha': 'HaProject',
    'kent-christensen': 'KentChristensenProject',
    'tc': 'TcProject'
  };
  
  const folderName = projectMap[projectName];
  return cloudinaryAssets[folderName] || [];
};

// Helper function to get service icons
export const getServiceIcons = () => {
  return cloudinaryAssets['services'] || [];
};

// Helper function to get team members
export const getTeamMembers = () => {
  return cloudinaryAssets['teams'] || [];
};

// Helper function to get gallery images
export const getGalleryImages = () => {
  return cloudinaryAssets['gallery'] || [];
};
`;

  // Ensure the directory exists
  const dir = './src/data';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync('./src/data/cloudinaryAssets.js', configContent);
  console.log('📁 Generated cloudinaryAssets.js configuration file');
};

// Run the upload
uploadAllAssets().catch(console.error);