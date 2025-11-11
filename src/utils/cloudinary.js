// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  baseUrl: "https://res.cloudinary.com",
};

// Build optimized Cloudinary URL for images
export const buildOptimizedUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fit",
  } = options;

  const transformations = [
    quality && `q_${quality}`,
    format && `f_${format}`,
    width && `w_${width}`,
    height && `h_${height}`,
    crop && `c_${crop}`,
  ]
    .filter(Boolean)
    .join(",");

  const transformationString = transformations ? `${transformations}/` : "";

  return `${CLOUDINARY_CONFIG.baseUrl}/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transformationString}${publicId}`;
};

// Build optimized Cloudinary URL for videos
export const buildOptimizedVideoUrl = (publicId, options = {}) => {
  const { quality = "auto", format = "auto" } = options;

  const transformations = [
    quality && `q_${quality}`,
    format && `f_${format}`,
    "vc_auto",
  ]
    .filter(Boolean)
    .join(",");

  const transformationString = transformations ? `${transformations}/` : "";

  return `${CLOUDINARY_CONFIG.baseUrl}/${CLOUDINARY_CONFIG.cloudName}/video/upload/${transformationString}${publicId}`;
};

// Pre-defined image public IDs based on your uploaded assets
export const IMAGE_ASSETS = {
  // ContainerFirst images
  landscape: "scape/landscape/scape/landscape/landscape1",
  hardscape: "scape/hardscape/scape/hardscape/hardscape1",
  softscape: "scape/softscape/scape/softscape/softscape1",
  poolscape: "scape/poolscape/scape/poolscape/poolscape1",
  nightscape: "scape/nightscape/scape/nightscape/nightscape1",
  waterscape: "scape/waterscape/scape/waterscape/waterscape1",
  firescape: "scape/firescape/scape/firescape/firescape1",
  courtscape: "scape/courtscape/scape/courtscape/courtscape2",

  // ContainerSecond images
  gallery10: "scape/gallery/scape/gallery/Asset10",
  gallery11: "scape/gallery/scape/gallery/Asset11",
  gallery12: "scape/gallery/scape/gallery/Asset12",

  // ContainerThird images
  asset4: "scape/images/scape/images/Asset4",
  gallery28: "scape/gallery/scape/gallery/Asset28",
  gallery29: "scape/gallery/scape/gallery/Asset29",

  // ContainerFourth images
  gallery38: "scape/gallery/scape/gallery/Asset38",
  gallery35: "scape/gallery/scape/gallery/Asset35",
  gallery18: "scape/gallery/scape/gallery/Asset18",

  // ContainerFifth images
  gallery8: "scape/gallery/scape/gallery/Asset8",
  gallery13: "scape/gallery/scape/gallery/Asset13",
  gallery14: "scape/gallery/scape/gallery/Asset14",
  gallery15: "scape/gallery/scape/gallery/Asset15",
  gallery16: "scape/gallery/scape/gallery/Asset16",
  gallery17: "scape/gallery/scape/gallery/Asset17",

  // Footer logo
  scapeLogoW: "scape/images/scape/images/ScapeLogoW",

  // ArProject images with duplicate folder structure
  arProject1: "scape/projects/arproject/scape/projects/arproject/Project1",
  arProject2: "scape/projects/arproject/scape/projects/arproject/Project2",
  arProject3: "scape/projects/arproject/scape/projects/arproject/Project3",
  arProject4: "scape/projects/arproject/scape/projects/arproject/Project4",
  arProject5: "scape/projects/arproject/scape/projects/arproject/Project5",
  arProject6: "scape/projects/arproject/scape/projects/arproject/Project6",
  arProject7: "scape/projects/arproject/scape/projects/arproject/Project7",
  arProject8: "scape/projects/arproject/scape/projects/arproject/Project8",

  // BnProject images with duplicate folder structure
  bnProject1: "scape/projects/bennett/scape/projects/bennett/Project1",
  bnProject2: "scape/projects/bennett/scape/projects/bennett/Project2",
  bnProject3: "scape/projects/bennett/scape/projects/bennett/Project3",
  bnProject4: "scape/projects/bennett/scape/projects/bennett/Project4",
  bnProject9: "scape/projects/bennett/scape/projects/bennett/Project9",
  bnProject10: "scape/projects/bennett/scape/projects/bennett/Project10",

  // GaProject images with duplicate folder structure
  gaProject1: "scape/projects/ga/scape/projects/ga/Project1",
  gaProject2: "scape/projects/ga/scape/projects/ga/Project2",
  gaProject3: "scape/projects/ga/scape/projects/ga/Project3",
  gaProject4: "scape/projects/ga/scape/projects/ga/Project4",
  gaProject5: "scape/projects/ga/scape/projects/ga/Project5",
  gaProject6: "scape/projects/ga/scape/projects/ga/Project6",
  gaProject7: "scape/projects/ga/scape/projects/ga/Project7",
  gaProject8: "scape/projects/ga/scape/projects/ga/Project8",
  gaProject9: "scape/projects/ga/scape/projects/ga/Project9",
  gaProject10: "scape/projects/ga/scape/projects/ga/Project10",
  gaProject11: "scape/projects/ga/scape/projects/ga/Project11",
  gaProject12: "scape/projects/ga/scape/projects/ga/Project12",

  // GnProject images with duplicate folder structure
  gnProject1: "scape/projects/gardner/scape/projects/gardner/Project1",
  gnProject2: "scape/projects/gardner/scape/projects/gardner/Project2",
  gnProject3: "scape/projects/gardner/scape/projects/gardner/Project3",
  gnProject4: "scape/projects/gardner/scape/projects/gardner/Project4",
  gnProject5: "scape/projects/gardner/scape/projects/gardner/Project5",
  gnProject6: "scape/projects/gardner/scape/projects/gardner/Project6",
  gnProject7: "scape/projects/gardner/scape/projects/gardner/Project7",
  gnProject8: "scape/projects/gardner/scape/projects/gardner/Project8",

  // HaProject images with duplicate folder structure
  haProject1: "scape/projects/ha/scape/projects/ha/Project1",
  haProject2: "scape/projects/ha/scape/projects/ha/Project2",
  haProject3: "scape/projects/ha/scape/projects/ha/Project3",
  haProject4: "scape/projects/ha/scape/projects/ha/Project4",
  haProject5: "scape/projects/ha/scape/projects/ha/Project5",
  haProject6: "scape/projects/ha/scape/projects/ha/Project6",
  haProject7: "scape/projects/ha/scape/projects/ha/Project7",
  haProject8: "scape/projects/ha/scape/projects/ha/Project8",
  haProject9: "scape/projects/ha/scape/projects/ha/Project9",
  haProject10: "scape/projects/ha/scape/projects/ha/Project10",
  haProject11: "scape/projects/ha/scape/projects/ha/Project11",
  haProject12: "scape/projects/ha/scape/projects/ha/Project12",

  // KcProject images with duplicate folder structure
  kcProject1: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project1',
  kcProject2: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project2',
  kcProject3: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project3',
  kcProject4: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project4',
  kcProject5: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project5',
  kcProject6: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project6',
  kcProject7: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project7',
  kcProject8: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project8',
  kcProject9: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project9',
  kcProject10: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project10',
  kcProject11: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project11',
  kcProject12: 'scape/projects/kent-christensen/scape/projects/kent-christensen/Project12',

  // TcProject images with duplicate folder structure
  tcProject1: 'scape/projects/tc/scape/projects/tc/Project1',
  tcProject2: 'scape/projects/tc/scape/projects/tc/Project2',
  tcProject3: 'scape/projects/tc/scape/projects/tc/Project3',
  tcProject4: 'scape/projects/tc/scape/projects/tc/Project4',
  tcProject5: 'scape/projects/tc/scape/projects/tc/Project5',
  tcProject6: 'scape/projects/tc/scape/projects/tc/Project6',
  tcProject7: 'scape/projects/tc/scape/projects/tc/Project7',
  tcProject8: 'scape/projects/tc/scape/projects/tc/Project8',
  tcProject9: 'scape/projects/tc/scape/projects/tc/Project9',
  tcProject10: 'scape/projects/tc/scape/projects/tc/Project10',
  tcProject11: 'scape/projects/tc/scape/projects/tc/Project11',
  tcProject12: 'scape/projects/tc/scape/projects/tc/Project12',

    // Service logos
  courtscapeService: 'scape/services/scape/services/courtscape',
  
  // Courtscape showcase images with duplicate folder structure
  courtscape2: 'scape/courtscape/scape/courtscape/courtscape2',
  courtscape3: 'scape/courtscape/scape/courtscape/courtscape3',
  courtscape4: 'scape/courtscape/scape/courtscape/courtscape4',
  courtscape5: 'scape/courtscape/scape/courtscape/courtscape5',
  courtscape7: 'scape/courtscape/scape/courtscape/courtscape7',
  courtscape8: 'scape/courtscape/scape/courtscape/courtscape8',
  courtscape10: 'scape/courtscape/scape/courtscape/courtscape10',

    // Service logos
  firescapeService: 'scape/services/scape/services/firescape',
  hardscapeService: 'scape/services/scape/services/hardscape',
  
  // Firescape showcase images
  firescape1: 'scape/firescape/scape/firescape/firescape1',
  firescape2: 'scape/firescape/scape/firescape/firescape2',
  firescape3: 'scape/firescape/scape/firescape/firescape3',
  firescape4: 'scape/firescape/scape/firescape/firescape4',
  firescape5: 'scape/firescape/scape/firescape/firescape5',
  firescape6: 'scape/firescape/scape/firescape/firescape6',
  firescape7: 'scape/firescape/scape/firescape/firescape7',
  firescape8: 'scape/firescape/scape/firescape/firescape8',
  firescape9: 'scape/firescape/scape/firescape/firescape9',
  firescape10: 'scape/firescape/scape/firescape/firescape10',
  firescape11: 'scape/firescape/scape/firescape/firescape11',
  firescape12: 'scape/firescape/scape/firescape/firescape12',
  firescape15: 'scape/firescape/scape/firescape/firescape15',
  firescape16: 'scape/firescape/scape/firescape/firescape16',
  firescape18: 'scape/firescape/scape/firescape/firescape18',
  firescape19: 'scape/firescape/scape/firescape/firescape19',
  
  // Hardscape showcase images
  hardscape1: 'scape/hardscape/scape/hardscape/hardscape1',
  hardscape2: 'scape/hardscape/scape/hardscape/hardscape2',
  hardscape3: 'scape/hardscape/scape/hardscape/hardscape3',
  hardscape4: 'scape/hardscape/scape/hardscape/hardscape4',
  hardscape5: 'scape/hardscape/scape/hardscape/hardscape5',
  hardscape6: 'scape/hardscape/scape/hardscape/hardscape6',
  hardscape7: 'scape/hardscape/scape/hardscape/hardscape7',
  hardscape8: 'scape/hardscape/scape/hardscape/hardscape8',
  hardscape9: 'scape/hardscape/scape/hardscape/hardscape9',
  hardscape10: 'scape/hardscape/scape/hardscape/hardscape10',
  hardscape11: 'scape/hardscape/scape/hardscape/hardscape11',
  hardscape12: 'scape/hardscape/scape/hardscape/hardscape12',

    // Service logos
  landscapeService: 'scape/services/scape/services/landscape',
  nightscapeService: 'scape/services/scape/services/nightscape',
  
  // Landscape showcase images
  landscape1: 'scape/landscape/scape/landscape/landscape1',
  landscape2: 'scape/landscape/scape/landscape/landscape2',
  landscape3: 'scape/landscape/scape/landscape/landscape3',
  landscape4: 'scape/landscape/scape/landscape/landscape4',
  landscape5: 'scape/landscape/scape/landscape/landscape5',
  landscape6: 'scape/landscape/scape/landscape/landscape6',
  landscape7: 'scape/landscape/scape/landscape/landscape7',
  landscape8: 'scape/landscape/scape/landscape/landscape8',
  landscape9: 'scape/landscape/scape/landscape/landscape9',
  landscape10: 'scape/landscape/scape/landscape/landscape10',
  landscape11: 'scape/landscape/scape/landscape/landscape11',
  landscape12: 'scape/landscape/scape/landscape/landscape12',
  
  // Nightscape showcase images
  nightscape1: 'scape/nightscape/scape/nightscape/nightscape1',
  nightscape2: 'scape/nightscape/scape/nightscape/nightscape2',
  nightscape3: 'scape/nightscape/scape/nightscape/nightscape3',
  nightscape4: 'scape/nightscape/scape/nightscape/nightscape4',
  nightscape5: 'scape/nightscape/scape/nightscape/nightscape5',
  nightscape6: 'scape/nightscape/scape/nightscape/nightscape6',
  nightscape9: 'scape/nightscape/scape/nightscape/nightscape9',
  nightscape10: 'scape/nightscape/scape/nightscape/nightscape10',
  nightscape11: 'scape/nightscape/scape/nightscape/nightscape11',
  nightscape12: 'scape/nightscape/scape/nightscape/nightscape12',

   // Poolscape showcase images
  poolscape1: "scape/poolscape/scape/poolscape/poolscape1",
  poolscape2: "scape/poolscape/scape/poolscape/poolscape2",
  poolscape3: "scape/poolscape/scape/poolscape/poolscape3",
  poolscape4: "scape/poolscape/scape/poolscape/poolscape4",
  poolscape5: "scape/poolscape/scape/poolscape/poolscape5",
  poolscape6: "scape/poolscape/scape/poolscape/poolscape6",
  poolscape7: "scape/poolscape/scape/poolscape/poolscape7",
  poolscape8: "scape/poolscape/scape/poolscape/poolscape8",
  poolscape9: "scape/poolscape/scape/poolscape/poolscape9",
  poolscape10: "scape/poolscape/scape/poolscape/poolscape10",
  poolscape11: "scape/poolscape/scape/poolscape/poolscape11",
  poolscape12: "scape/poolscape/scape/poolscape/poolscape12",
  poolscape13: "scape/poolscape/scape/poolscape/poolscape13",
  poolscape14: "scape/poolscape/scape/poolscape/poolscape14",

  // Softscape showcase images
  softscape1: "scape/softscape/scape/softscape/softscape1",
  softscape2: "scape/softscape/scape/softscape/softscape2",
  softscape3: "scape/softscape/scape/softscape/softscape3",
  softscape4: "scape/softscape/scape/softscape/softscape4",
  softscape5: "scape/softscape/scape/softscape/softscape5",
  softscape6: "scape/softscape/scape/softscape/softscape6",
  softscape7: "scape/softscape/scape/softscape/softscape7",
  softscape8: "scape/softscape/scape/softscape/softscape8",
  softscape9: "scape/softscape/scape/softscape/softscape9",
  softscape10: "scape/softscape/scape/softscape/softscape10",
  softscape11: "scape/softscape/scape/softscape/softscape11",
  softscape12: "scape/softscape/scape/softscape/softscape12",

  // Waterscape showcase images
  waterscape1: "scape/waterscape/scape/waterscape/waterscape1",
  waterscape2: "scape/waterscape/scape/waterscape/waterscape2",
  waterscape3: "scape/waterscape/scape/waterscape/waterscape3",
  waterscape4: "scape/waterscape/scape/waterscape/waterscape4",
  waterscape5: "scape/waterscape/scape/waterscape/waterscape5",
  waterscape6: "scape/waterscape/scape/waterscape/waterscape6",
  waterscape7: "scape/waterscape/scape/waterscape/waterscape7",
  waterscape8: "scape/waterscape/scape/waterscape/waterscape8",
  waterscape9: "scape/waterscape/scape/waterscape/waterscape9",
  waterscape10: "scape/waterscape/scape/waterscape/waterscape10",
  waterscape11: "scape/waterscape/scape/waterscape/waterscape11",
  waterscape12: "scape/waterscape/scape/waterscape/waterscape12",

    // About section images
  asset1: "scape/images/scape/images/Asset1",
  asset2: "scape/images/scape/images/Asset2", 
  asset3: "scape/images/scape/images/Asset3",
  
  // Service logos (if not already included)
  poolscapeService: 'scape/services/scape/services/poolscape',
  softscapeService: 'scape/services/scape/services/softscape',
  waterscapeService: 'scape/services/scape/services/waterscape',

  // Team member images
  'scape/teams/scape/teams/Kent Christensen-CF CCO': "scape/teams/scape/teams/Kent Christensen-CF CCO",
  'scape/teams/scape/teams/Peter J. Novak-CEO': "scape/teams/scape/teams/Peter J. Novak-CEO",
  'scape/teams/scape/teams/Steve Mortensen-CF CVO': "scape/teams/scape/teams/Steve Mortensen-CF CVO",
  'scape/teams/scape/teams/Ryan Kerekes-CFO': "scape/teams/scape/teams/Ryan Kerekes-CFO",
  'scape/teams/scape/teams/Andrew James-DO': "scape/teams/scape/teams/Andrew James-DO",
  'scape/teams/scape/teams/Troy Clark-LLD': "scape/teams/scape/teams/Troy Clark-LLD",
  'scape/teams/scape/teams/Rene Ignacio-LPD': "scape/teams/scape/teams/Rene Ignacio-LPD",
};

export const VIDEO_ASSETS = {
  background1: "scape/videos/scape/videos/Background1",
  background2: "scape/videos/scape/videos/Background2",
  background3: "scape/videos/scape/videos/Background3",
  background4: "scape/videos/scape/videos/Background4",
};
