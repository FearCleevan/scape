import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './VlogDetail.module.css';
import { FiMail, FiPhone, FiMapPin, FiUser, FiGlobe } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Import all gallery images
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

const allAssets = [
    Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
    Asset11, Asset12, Asset13, Asset14, Asset15, Asset16, Asset17, Asset18, Asset20,
    Asset21, Asset22, Asset23, Asset24, Asset25, Asset26, Asset27, Asset28, Asset29, Asset30,
    Asset31, Asset32, Asset33, Asset34, Asset35, Asset36, Asset37, Asset38, Asset39, Asset40
];

// Blog data (must match SocialFirst.jsx)
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
const blogPosts = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: blogTitles[i % blogTitles.length],
    category: blogCategories[i % blogCategories.length],
    date: `April ${19 - (i % 10)}, 2025`,
    comments: 'No Comments',
    image: allAssets[Math.floor(Math.random() * allAssets.length)],
    // For demo: you can map the content below to each blog or use the same for all.
}));

// Utility: convert category to URL slug
const categoryToSlug = (category) =>
    category
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

const VlogDetail = () => {
    const { slug } = useParams();
    // Find the current blog by slug
    const blog = blogPosts.find((b) => categoryToSlug(b.category) === slug) || blogPosts[0];
    // Related posts: show 6 others, not current
    const relatedPosts = blogPosts.filter((b) => b.id !== blog.id).slice(0, 6);

    // Template content: Replace with blog-specific content as needed
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                {/* LEFT SECTION - BLOG CONTENT */}
                <div className={styles.leftSection}>
                    <img src={blog.image} alt={blog.title} className={styles.heroImage} />
                    <div className={styles.blogMeta}>
                        <span className={styles.categoryBadge}>{blog.category}</span>
                        <span className={styles.date}>{blog.date}</span>
                    </div>
                    <h1 className={styles.blogTitle}>{blog.title}</h1>
                    <p className={styles.blogIntro}>
                        The extreme winds and blazing sun in Utah aren’t just tough on your property; they also make it harder to create a comfortable, aesthetically pleasing outdoor space. For Utah homeowners, strategically planting the right trees can be a game-changer. Whether you’re looking for a shady retreat from the summer heat or a sturdy windbreak to protect your home and garden, choosing trees wisely is key.
                        <br /><br />
                        But not all trees thrive in Utah’s unique climate. With its challenging soil conditions, varying climate zones, and irrigation concerns, selecting the wrong tree can lead to wasted time, effort, and money. This guide will walk you through everything you need to know about finding the perfect shade and windbreak trees for your Utah property.
                        <br /><br />
                        By the end, you’ll not only know the best trees for shade and wind protection in Utah, but also how they help with soil erosion control and how to care for them. Plus, if this feels overwhelming, we’ll show you how Chopper Landscaping can make the process easier for you.
                    </p>
                    <h2 className={styles.h2}>Factors to Consider When Choosing Trees</h2>
                    <p className={styles.paragraph}>
                        Utah’s climate and landscape are unique, which makes tree selection more strategic than it might be in other areas. Here’s what you’ll need to keep in mind
                    </p>
                    <h3 className={styles.h3}>Utah’s Climate Zones</h3>
                    <p className={styles.paragraph}>
                        Utah experiences various climate conditions, ranging from arid deserts to colder mountainous regions. Most of the state falls within USDA Hardiness Zones 4–7. Before selecting a tree, make sure its hardiness zone aligns with your specific location to guarantee it thrives year-round.
                    </p>
                    <p className={styles.tip}>
                        Tip: If you’re not sure of your hardiness zone, visit the USDA’s site or consult a landscaping expert like Chopper Landscaping.
                    </p>
                    <h3 className={styles.h3}>Soil Types and Preferences</h3>
                    <p className={styles.paragraph}>
                        Utah soil is often sandy, alkaline, or clay-like. Some trees may struggle in these conditions, so prioritize species known for adapting to various soil types or improving soil fertility over time, such as maple and juniper.
                    </p>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Stunning Outdoor Spaces in Utah! 🌿✨</h3>
                        <p className={styles.cardText}>
                            At Chopper Landscaping, we design and build stunning, functional outdoor spaces. From hardscapes to outdoor lighting and kitchens, we bring your vision to life.
                        </p>
                        <button className={styles.cardButton}>GET A FREE QUOTE NOW!</button>
                    </div>
                    <h3 className={styles.h3}>Water Availability</h3>
                    <p className={styles.paragraph}>
                        Water scarcity is a significant challenge for Utah homeowners. Opt for drought-tolerant species or trees that thrive with minimal irrigation. These types of trees will help keep maintenance costs low and ensure they stay healthy in dry spells.
                    </p>
                    <h3 className={styles.h3}>Maintenance Requirements</h3>
                    <p className={styles.paragraph}>
                        Ask yourself how much upkeep you’re comfortable with. Fast-growing trees like hybrid poplars require regular pruning, while slow-growers like oaks need minimal care but take longer to offer full benefits.
                    </p>
                    <p className={styles.paragraph}>
                        Now, let’s explore some tree varieties that are perfect for shade and wind protection.
                    </p>
                    <h2 className={styles.h2}>Top Trees for Shade in Utah</h2>
                    <p className={styles.paragraph}>
                        Creating shade in your yard not only makes outdoor spaces more enjoyable but also helps lower energy costs by naturally cooling your home. Here are the top three shade tree options for Utah:
                    </p>
                    <ol className={styles.treeList}>
                        <li>
                            <strong className={styles.strong}>Maple (Acer)</strong>
                            <p>
                                Known for their brilliant fall colors, maple trees are a favorite for their beauty and robust canopies. Varieties like the Sugar Maple and Autumn Blaze are especially popular.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 3–7</li>
                                <li>Ideal Conditions: Prefers well-draining soil and full sun or partial shade. Moderate water needs.</li>
                                <li>Benefits: Provides dense shade; vibrant seasonal appeal.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className={styles.strong}>Oak (Quercus)</strong>
                            <p>
                                Oaks offer elegance, longevity, and shade. With varieties like the Bur Oak and Red Oak, Utah homeowners can expect durable trees that improve with age.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 3–8</li>
                                <li>Ideal Conditions: Adapts to most soil types but prefers deep, fertile soil. Drought-tolerant once mature.</li>
                                <li>Benefits: Requires little maintenance; a long-lived, striking addition to any yard.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className={styles.strong}>Hybrid Poplar</strong>
                            <p>
                                For rapid shade coverage, hybrid poplars are unbeatable. They grow quickly, making them an excellent solution for new landscapes.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 3–7</li>
                                <li>Ideal Conditions: Thrives in well-drained, nutrient-rich soil. Needs consistent irrigation in early years.</li>
                                <li>Benefits: Fastest-growing shade tree; ideal for large yards or agricultural properties.</li>
                            </ul>
                        </li>
                    </ol>
                    <h2 className={styles.h2}>Top Trees for Wind Protection in Utah</h2>
                    <p className={styles.paragraph}>
                        Windbreak trees create a strong defense against harsh Utah winds, protecting your home, garden, and reducing energy costs.
                    </p>
                    <ol className={styles.treeList}>
                        <li>
                            <strong className={styles.strong}>Austrian Pine (Pinus nigra)</strong>
                            <p>
                                This tough evergreen thrives in harsh climates, withstanding both wind and snow. It’s a favorite for creating dense windbreaks.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 4–7</li>
                                <li>Ideal Conditions: Prefers well-drained soil but tolerates most soil types. Drought-tolerant.</li>
                                <li>Benefits: Provides year-round wind protection thanks to its evergreen foliage.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className={styles.strong}>Concolor Fir (Abies concolor)</strong>
                            <p>
                                The Concolor Fir is a hardy, drought-tolerant evergreen with soft, silver-blue needles that add a striking visual component to your landscape.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 3–7</li>
                                <li>Ideal Conditions: Performs best in full sun and well-drained soil.</li>
                                <li>Benefits: Great for high-altitude areas; doubles as a decorative tree and windbreak.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className={styles.strong}>Quaking Aspen (Populus tremuloides)</strong>
                            <p>
                                A staple in Utah’s stunning natural landscapes, the Quaking Aspen is as hardy as it is beautiful, with shimmering leaves and smooth, white bark.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 1–7</li>
                                <li>Ideal Conditions: Prefers moist, well-drained soil but tolerates clay. Requires ample space.</li>
                                <li>Benefits: Adds natural beauty; grows quickly to buffer wind effectively.</li>
                            </ul>
                        </li>
                    </ol>
                    <h2 className={styles.h2}>Combination Trees for Shade and Wind Protection</h2>
                    <p className={styles.paragraph}>
                        Looking for multitasking trees? Some species provide both shade and act as effective windbreaks.
                    </p>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Stunning Outdoor Spaces in Utah! 🌿✨</h3>
                        <p className={styles.cardText}>
                            At Chopper Landscaping, we design and build stunning, functional outdoor spaces. From hardscapes to outdoor lighting and kitchens, we bring your vision to life.
                        </p>
                        <button className={styles.cardButton}>GET A FREE QUOTE NOW!</button>
                    </div>
                    <ol className={styles.treeList}>
                        <li>
                            <strong className={styles.strong}>Rocky Mountain Juniper (Juniperus scopulorum)</strong>
                            <p>
                                An adaptable evergreen native to the region, Rocky Mountain Juniper is perfect for homeowners needing year-round coverage.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 3–7</li>
                                <li>Benefits: Low-maintenance, drought-tolerant, and ideal for wind and shade.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className={styles.strong}>Hackberry (Celtis occidentalis)</strong>
                            <p>
                                With its broad canopy for shade and resilience against wind, Hackberry trees are a versatile favorite.
                            </p>
                            <ul>
                                <li>Hardiness Zone: 3–9</li>
                                <li>Benefits: Thrives in difficult soil conditions and provides robust shade and wind protection.</li>
                            </ul>
                        </li>
                    </ol>
                    <h2 className={styles.h2}>Planting and Care Tips</h2>
                    <p className={styles.paragraph}>
                        Choosing the right tree is important, but proper planting and care ensure success. Here’s how to make your efforts count:
                    </p>
                    <ul>
                        <li className={styles.text}><strong>Best Planting Times:</strong> Plant shade and windbreak trees in early spring or fall to give them the best chance to establish roots before extreme weather.</li>
                        <li className={styles.text}><strong>Watering and Fertilization:</strong> For young trees, water deeply and frequently. Established trees typically require less irrigation, especially drought-tolerant species.</li>
                        <li className={styles.text}><strong>Pruning Techniques:</strong> Young Trees: Prune for shape and structural integrity. Mature Trees: Remove dead or diseased branches annually for long-term health.</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Proper care not only helps your trees thrive but also makes them more effective at providing shade and windbreaks.
                    </p>
                    <h2 className={styles.h2}>Trees as Allies in Soil Erosion Control Utah</h2>
                    <p className={styles.paragraph}>
                        Beyond their aesthetic and functional roles, trees are vital allies in combating soil erosion.
                    </p>
                    <h3 className={styles.h3}>Stabilizing the Soil</h3>
                    <p className={styles.paragraph}>
                        The deep root systems of trees like oak and juniper bind the soil, preventing erosion during heavy rain or strong winds.
                    </p>
                    <h3 className={styles.h3}>Windbreaks and Erosion</h3>
                    <p className={styles.paragraph}>
                        Windbreak trees like Austrian Pine reduce wind velocity, safeguarding your soil from erosion on exposed properties.
                    </p>
                    <h3 className={styles.h3}>Additional Erosion Control Methods</h3>
                    <p className={styles.paragraph}>
                        Combine tree planting with mulching, terracing, and retaining walls for a well-rounded approach to soil preservation.
                    </p>
                    <h2 className={styles.h2}>Achieve a Balanced Landscape in Utah</h2>
                    <p className={styles.paragraph}>
                        By carefully selecting and maintaining the best shade and wind protection trees for your property, you’ll enjoy a more beautiful, functional, and environmentally sustainable landscape. Whether you’re drawn to the vibrant maple, the sturdy Austrian pine, or the multitasking juniper, proper care ensures your trees thrive for years to come.
                    </p>
                    <p className={styles.paragraph}>
                        Struggling to decide or need help transforming your yard? Contact Chopper Landscaping today! Our experts specialize in helping Utah homeowners create stunning outdoor spaces, from shade-filled patios to windproof gardens. Reach out to schedule a consultation and start planting the landscape of your dreams.
                    </p>
                    <div className={styles.shareSection}>
                        <h3 className={styles.shareTitle}>Share this:</h3>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        </div>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.postTags}>
                        <span>POST TAGS:</span>
                        <span className={styles.tags}>LANDSCAPING, UTAH LANDSCAPE</span>
                    </div>
                    {/* Related Posts */}
                    <h3 className={styles.relatedTitle}>Related Posts</h3>
                    <div className={styles.relatedPostsGrid}>
                        {relatedPosts.map((post) => (
                            <div key={post.id} className={styles.relatedPost}>
                                <Link to={`/social/${categoryToSlug(post.category)}`}>
                                    <img src={post.image} alt={post.title} className={styles.relatedImage} />
                                </Link>
                                <div className={styles.relatedContent}>
                                    <Link to={`/social/${categoryToSlug(post.category)}`} className={styles.relatedTitleLink}>
                                        {post.title}
                                    </Link>
                                    <span className={styles.relatedDate}>{post.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Leave a Reply */}
                    <h3 className={styles.replyTitle}>Leave a Reply</h3>
                    <form className={styles.replyForm}>
                        <textarea className={styles.replyInput} placeholder="Message*" required />
                        <div className={styles.inputRow}>
                            <div className={styles.inputWithIcon}>
                                <FiMail className={styles.inputIcon} />
                                <input type="email" className={styles.input} placeholder="Email*" required />
                            </div>
                            <div className={styles.inputWithIcon}>
                                <FiUser className={styles.inputIcon} />
                                <input type="text" className={styles.input} placeholder="Name*" required />
                            </div>
                            <div className={styles.inputWithIcon}>
                                <FiGlobe className={styles.inputIcon} />
                                <input type="text" className={styles.input} placeholder="Website (Optional)" />
                            </div>
                        </div>
                        <button type="submit" className={styles.commentButton}>Comment</button>
                    </form>
                </div>
                {/* RIGHT SECTION - SIDEBAR (Recent Posts, Newsletter, About Us) */}
                <div className={styles.rightSection}>
                    <h3 className={styles.sidebarTitle}>Recent Post</h3>
                    <div className={styles.recentPosts}>
                        {blogPosts.slice(0, 6).map((post) => (
                            <div key={post.id} className={styles.recentPost}>
                                <Link to={`/social/${categoryToSlug(post.category)}`}>
                                    <img src={post.image} alt={post.title} className={styles.recentImage} />
                                </Link>
                                <div className={styles.recentContent}>
                                    <Link to={`/social/${categoryToSlug(post.category)}`} className={styles.recentTitle}>
                                        {post.title}
                                    </Link>
                                    <span className={styles.recentDate}>{post.date}</span>
                                </div>
                            </div>
                        ))}
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

export default VlogDetail;