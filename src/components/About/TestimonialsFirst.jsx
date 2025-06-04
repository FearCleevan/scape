import React, { useState } from 'react';
import styles from './TestimonialsFirst.module.css';
import { FaStar, FaGoogle } from 'react-icons/fa';

// Testimonial data (include 12 testimonials)
const testimonials = [
    {
        name: "Steve Cooper",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "April 12, 2025",
        rating: 5,
        comment: `We couldn’t be happier with our experience working with the team at scape. From start to finish, their communication was exceptional—clear, consistent, and responsive throughout the entire process. The design, build, and installation of our home were thoroughly planned and executed with impressive attention to detail. The scope was clearly defined upfront, accurate, and delivered exactly as promised—on time and on budget. Their professionalism and quality of work exceeded our expectations. We highly recommend them for any landscaping project.`,
    },
    {
        name: "Tyler and Leigh Bennett",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        date: "March 29, 2025",
        rating: 5,
        comment: `The scape team really did an in transformation to our backyard! They recently completed a full outdoor renovation, including a stunning pool, beautifully designed hardscape with patios and walkways, lush plants and greenery, and a top-notch sports court for our family. From start to finish, the team was professional, attentive, and exceeded our expectations. The pool is a perfect oasis, the hardscape adds elegance, the softscape brings life and color, and the sports court has been a hit with our kids and friends. Highly recommend scape for any landscaping project—truly a dream come true!`,
    },
    {
        name: "Curtis and Carrie Marshall",
        avatar: "https://randomuser.me/api/portraits/women/56.jpg",
        date: "March 10, 2025",
        rating: 5,
        comment: `I've known Steve for several years, so when we decided to redesign our backyard it was a no brainer to give him a shot. However, we were thoroughly amazed at how quickly he was able to get his team on our job and complete the work and in a super professional fashion. Even our last minute upgrades were not a problem and handled with timeliness and minimal additional cost. We will always recommend him to anyone looking to build or remodel the landsccape for their yards.`,
    },
    // 9 more sample testimonials
    {
        name: "Madison Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "February 18, 2025",
        rating: 5,
        comment: `Scape did an incredible job with our front yard transformation. The team was punctual, creative, and paid attention to every detail. The results are stunning—we get compliments from neighbors all the time!`,
    },
    {
        name: "John Kim",
        avatar: "https://randomuser.me/api/portraits/men/68.jpg",
        date: "February 2, 2025",
        rating: 5,
        comment: `We hired Scape for our commercial landscaping and couldn't be happier. The project was delivered on time, the crew was courteous, and the design exceeded our expectations. Highly recommended!`,
    },
    {
        name: "Elena Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        date: "January 20, 2025",
        rating: 5,
        comment: `Our backyard patio is now our favorite place to relax thanks to Scape! The lighting, plants, and hardscape came together perfectly. Great communication and customer service, too.`,
    },
    {
        name: "Derek Sanders",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        date: "January 5, 2025",
        rating: 5,
        comment: `Fantastic experience from start to finish. The Scape team listened to our ideas and delivered a beautiful, functional outdoor space. Would absolutely work with them again!`,
    },
    {
        name: "Priya Patel",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        date: "December 15, 2024",
        rating: 5,
        comment: `Our new garden is thriving and the design is exactly what we wanted. The Scape crew was friendly, knowledgeable, and always cleaned up after themselves. Thank you!`,
    },
    // {
    //     name: "Samuel Green",
    //     avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    //     date: "November 29, 2024",
    //     rating: 5,
    //     comment: `We were impressed by the professionalism and expertise of the Scape team. They transformed our outdated yard into a modern oasis. The value for money is outstanding.`,
    // },
    // {
    //     name: "Sophie Chan",
    //     avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    //     date: "November 10, 2024",
    //     rating: 5,
    //     comment: `Scape made the landscaping process so easy and stress-free. They kept us updated at every stage and made sure we were happy with the final result. Highly recommended for anyone wanting a yard makeover!`,
    // },
    // {
    //     name: "Michael Brown",
    //     avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    //     date: "October 25, 2024",
    //     rating: 5,
    //     comment: `The attention to detail and commitment to quality from Scape was outstanding. Our property looks amazing and we couldn't be more pleased with the service we received.`,
    // },
    // {
    //     name: "Grace Williams",
    //     avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    //     date: "October 3, 2024",
    //     rating: 5,
    //     comment: `From the initial consultation to the final walk-through, Scape exceeded our expectations. The team is creative, skilled, and truly cares about their clients.`,
    // },
    // {
    //     name: "Ethan Clark",
    //     avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    //     date: "September 18, 2024",
    //     rating: 5,
    //     comment: `We love our new yard! The Scape team worked efficiently and finished ahead of schedule. The transformation is stunning and has added so much value to our home.`,
    // },
];

const MAX_VISIBLE = 110; // characters to show before truncating

const TestimonialsFirst = () => {
    // Use an object to track expanded state per card for dynamic height
    const [expanded, setExpanded] = useState({});

    const handleToggle = idx => {
        setExpanded(prev => ({
            ...prev,
            [idx]: !prev[idx],
        }));
    };

    return (
        <div
            className={styles.testimonialsContainer}
            style={
                Object.values(expanded).some(Boolean)
                    ? { minHeight: 1200 }
                    : undefined
            }
        >
            <div className={styles.grid}>
                {testimonials.map((t, idx) => (
                    <div className={styles.card} key={idx}>
                        <div className={styles.header}>
                            <img src={t.avatar} alt={t.name} className={styles.avatar} />
                            <div className={styles.userInfo}>
                                <span className={styles.name}>{t.name}</span>
                                
                                <div className={styles.date}>{t.date}</div>
                            </div>
                            <div>
                                <span className={styles.googleIcon}><FaGoogle size={20} color="#4285F4" /></span>
                            </div>
                        </div>
                        <div className={styles.stars}>
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={styles.star}
                                        color={i < t.rating ? "#ffc107" : "#e4e5e9"}
                                    />
                                ))}
                        </div>
                        <div
                            className={`${styles.comment} ${expanded[idx] ? styles.expanded : ''}`}
                            style={
                                expanded[idx]
                                    ? { maxHeight: "1000px", WebkitLineClamp: "unset", display: "block", overflow: "visible" }
                                    : undefined
                            }
                        >
                            {expanded[idx] || t.comment.length <= MAX_VISIBLE
                                ? t.comment
                                : t.comment.slice(0, MAX_VISIBLE) + '...'}
                        </div>
                        {t.comment.length > MAX_VISIBLE && (
                            <button
                                className={styles.readMore}
                                onClick={() => handleToggle(idx)}
                            >
                                {expanded[idx] ? 'Hide' : 'Read More'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsFirst;