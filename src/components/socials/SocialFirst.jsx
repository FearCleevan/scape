import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SocialFirst.module.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Import all images at the top
import Asset1 from '../../assets/gallery/Asset1.jpg';
import Asset2 from '../../assets/gallery/Asset2.jpg';
import Asset3 from '../../assets/gallery/Asset3.jpg';
import Asset4 from '../../assets/gallery/Asset4.jpg';
import Asset5 from '../../assets/gallery/Asset5.jpg';
import Asset6 from '../../assets/gallery/Asset6.jpg';
import Asset7 from '../../assets/gallery/Asset7.jpg';
import Asset8 from '../../assets/gallery/Asset8.jpg';
import Asset9 from '../../assets/gallery/Asset9.jpg';
import Asset10 from '../../assets/gallery/Asset10.jpg';
import Asset11 from '../../assets/gallery/Asset11.jpg';
import Asset12 from '../../assets/gallery/Asset12.jpg';
import Asset13 from '../../assets/gallery/Asset13.jpg';
import Asset14 from '../../assets/gallery/Asset14.jpg';
import Asset15 from '../../assets/gallery/Asset15.jpg';
import Asset16 from '../../assets/gallery/Asset16.jpg';
import Asset17 from '../../assets/gallery/Asset17.jpg';
import Asset18 from '../../assets/gallery/Asset18.jpg';
import Asset20 from '../../assets/gallery/Asset20.jpg';
import Asset21 from '../../assets/gallery/Asset21.jpg';
import Asset22 from '../../assets/gallery/Asset22.jpg';
import Asset23 from '../../assets/gallery/Asset23.jpg';
import Asset24 from '../../assets/gallery/Asset24.jpg';
import Asset25 from '../../assets/gallery/Asset25.jpg';
import Asset26 from '../../assets/gallery/Asset26.jpg';
import Asset27 from '../../assets/gallery/Asset27.jpg';
import Asset28 from '../../assets/gallery/Asset28.jpg';
import Asset29 from '../../assets/gallery/Asset29.jpg';
import Asset30 from '../../assets/gallery/Asset30.jpg';
import Asset31 from '../../assets/gallery/Asset31.jpg';
import Asset32 from '../../assets/gallery/Asset32.jpg';
import Asset33 from '../../assets/gallery/Asset33.jpg';
import Asset34 from '../../assets/gallery/Asset34.jpg';
import Asset35 from '../../assets/gallery/Asset35.jpg';
import Asset36 from '../../assets/gallery/Asset36.jpg';
import Asset37 from '../../assets/gallery/Asset37.jpg';
import Asset38 from '../../assets/gallery/Asset38.jpg';
import Asset39 from '../../assets/gallery/Asset39.jpg';
import Asset40 from '../../assets/gallery/Asset40.jpg';

// Create array of all imported images
const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12, Asset13, Asset14, Asset15, Asset16, Asset17, Asset18, Asset20,
  Asset21, Asset22, Asset23, Asset24, Asset25, Asset26, Asset27, Asset28, Asset29, Asset30,
  Asset31, Asset32, Asset33, Asset34, Asset35, Asset36, Asset37, Asset38, Asset39, Asset40
];

// Titles, categories, and sample dates for up to 40 blogs
const blogTitles = [
  'Best Trees for Shade and Wind Protection in Utah',
  'Landscaping Ideas for a Sustainable Utah Yard',
  '7 Proven Landscaping Techniques to Stop Soil Erosion in Utah',
  '9 Effective Fire-Resistant Landscaping Tips to Safeguard Your Utah Home',
  'Xeriscaping in Utah: Transform Your Yard and Save Big',
  'DIY vs. Professional Landscaping: 7 Key Comparisons for Utah Homeowners',
  'Utah Native Plants: The Complete Guide to Drought-Resistant Landscaping',
  'Seasonal Lawn Care: A Utah Homeowner\'s Monthly Checklist',
  'Creating Wildlife-Friendly Gardens in Utah',
  'The Ultimate Guide to Utah Rock Gardens',
  'How to Design a Pet-Friendly Landscape in Utah',
  'Maximizing Curb Appeal with Utah-Friendly Plants',
  'Low-Maintenance Landscaping Solutions for Busy Utah Families',
  'Utah Garden Pests: Identification and Safe Control',
  'Vertical Gardening: Save Space & Beautify Walls',
  'Water Features for Utah Yards: Ideas & Tips',
  'Choosing the Right Mulch for Utah Gardens',
  'Landscape Lighting Basics for Utah Homes',
  'Composting in Arid Climates: A Utah Guide',
  'The Benefits of Raised Bed Gardening in Utah',
  'Small Yard Landscaping: Big Impact in Utah',
  'Outdoor Living Spaces: Creating Comfort in Utah',
  'The Best Edible Plants for Utah Home Gardens',
  'Slope Solutions: Landscaping on a Hill in Utah',
  'Wildflower Meadows: A Guide for Utah Landscapes',
  'Modern Landscape Design Trends in Utah',
  'Utah Lawn Alternatives for Water Conservation',
  'How to Install Drip Irrigation in Your Utah Garden',
  'Pollinator Gardens: Attract Bees & Butterflies in Utah',
  'Rock Mulch vs. Bark Mulch: Pros & Cons for Utah',
  'Garden Pathways: Ideas for Utah Homes',
  'Retaining Walls: Function & Beauty for Utah Slopes',
  'Landscaping for Privacy in Utah Neighborhoods',
  'Rain Gardens: Managing Stormwater in Utah',
  'Tree Planting Mistakes to Avoid in Utah',
  'Best Shrubs for Utah Landscapes',
  'Utah Flowering Plants for Every Season',
  'How to Prune Trees & Shrubs in Utah',
  'Creating a Backyard Sanctuary in Utah',
  'Landscape Budgeting: Cost-Saving Tips for Utah Homeowners',
];

const blogCategories = [
  'SAFETY & SUSTAINABILITY', 'SUSTAINABLE DESIGN', 'EROSION CONTROL', 'FIRE SAFETY', 'WATER CONSERVATION',
  'PROFESSIONAL TIPS', 'NATIVE PLANTS', 'LAWN CARE', 'WILDLIFE', 'ROCK GARDENS',
  'PET-FRIENDLY', 'CURB APPEAL', 'LOW MAINTENANCE', 'PEST CONTROL', 'VERTICAL GARDENING',
  'WATER FEATURES', 'MULCHING', 'LIGHTING', 'COMPOSTING', 'RAISED BEDS',
  'SMALL YARDS', 'OUTDOOR LIVING', 'EDIBLES', 'SLOPES', 'WILDFLOWERS',
  'MODERN DESIGN', 'LAWN ALTERNATIVES', 'IRRIGATION', 'POLLINATORS', 'ROCK VS. BARK',
  'PATHWAYS', 'RETAINING WALLS', 'PRIVACY', 'RAIN GARDENS', 'TREE PLANTING',
  'SHRUBS', 'FLOWERING PLANTS', 'PRUNING', 'SANCTUARY', 'BUDGET TIPS'
];

// Utility: convert category to URL slug
const categoryToSlug = (category) =>
  category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanum with dashes
    .replace(/-+/g, '-')         // collapse multiple dashes
    .replace(/^-|-$/g, '');      // remove leading/trailing dash

// Generate 40 blog posts with random images and data
const blogPosts = Array.from({ length: 40 }, (_, i) => {
  const randomIndex = Math.floor(Math.random() * allAssets.length);
  return {
    id: i + 1,
    title: blogTitles[i % blogTitles.length],
    category: blogCategories[i % blogCategories.length],
    date: `April ${19 - (i % 10)}, 2025`,
    comments: 'No Comments',
    image: allAssets[randomIndex],
  };
});

const BLOGS_PER_PAGE = 10;

const SocialFirst = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / BLOGS_PER_PAGE);
  const paginatedBlogs = blogPosts.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );
  const recentPosts = blogPosts.slice(0, 6);

  // For pagination numbers, show all if less than 7, otherwise sliding window
  let pageNumbers = [];
  if (totalPages <= 7) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage <= 4) {
    pageNumbers = [1, 2, 3, 4, 5, '...', totalPages];
  } else if (currentPage >= totalPages - 3) {
    pageNumbers = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  } else {
    pageNumbers = [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  }

  const handlePageClick = (num) => {
    if (num === '...') return;
    setCurrentPage(num);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Left Section - Main Blog Area */}
        <div className={styles.leftSection}>
          <div className={styles.blogGrid}>
            {paginatedBlogs.map((post) => {
              const slug = categoryToSlug(post.category);
              return (
                <div key={post.id} className={styles.blogCard}>
                  <div className={styles.imageContainer}>
                    <Link to={`/social/${slug}`}>
                      <img src={post.image} alt={post.title} className={styles.blogImage} />
                      <span className={styles.categoryBadge}>{post.category}</span>
                    </Link>
                  </div>
                  <h3 className={styles.blogTitle}>
                    <Link to={`/social/${slug}`} className={styles.blogTitleLink}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className={styles.metaInfo}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.comments}>{post.comments}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Pagination */}
          <div className={styles.pagination}>
            {pageNumbers.map((num, idx) =>
              num === '...' ? (
                <span key={idx} className={styles.paginationEllipsis}>…</span>
              ) : (
                <button
                  key={num}
                  className={`${styles.paginationButton} ${currentPage === num ? styles.activePage : ''}`}
                  onClick={() => handlePageClick(num)}
                >
                  {num}
                </button>
              )
            )}
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div className={styles.rightSection}>
          <h3 className={styles.sidebarTitle}>Recent Post</h3>
          <div className={styles.recentPosts}>
            {recentPosts.map((post) => {
              const slug = categoryToSlug(post.category);
              return (
                <div key={post.id} className={styles.recentPost}>
                  <Link to={`/social/${slug}`}>
                    <img src={post.image} alt={post.title} className={styles.recentImage} />
                  </Link>
                  <div className={styles.recentContent}>
                    <Link to={`/social/${slug}`} className={styles.recentTitle}>
                      {post.title}
                    </Link>
                    <span className={styles.recentDate}>{post.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.newsletter}>
            <h3 className={styles.sidebarTitle}>Subscribe to our Newsletter</h3>
            <input type="email" placeholder="Email" className={styles.emailInput} />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutTitle}>About Us</h3>
            <p className={styles.aboutText}>Crafting Extraordinary with Scape</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiMapPin className={styles.contactIcon} />
                <span>1420 W. Center St., Orem, UT 84057</span>
              </div>
              <div className={styles.contactItem}>
                <FiPhone className={styles.contactIcon} />
                <span>1-801-319-1568</span>
              </div>
              <div className={styles.contactItem}>
                <FiMail className={styles.contactIcon} />
                <span>info@scapedbm.com</span>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <FaFacebook className={styles.socialIcon} />
              <FaLinkedin className={styles.socialIcon} />
              <FaTwitter className={styles.socialIcon} />
              <FaInstagram className={styles.socialIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFirst;