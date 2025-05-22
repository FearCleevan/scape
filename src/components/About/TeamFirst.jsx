import React from 'react';
import styles from './TeamFirst.module.css';

// Import team images
import Kent from '../../assets/teams/Kent Christensen-CF CCO.jpg';
import Peter from '../../assets/teams/Peter J. Novak-CEO.jpg';
import Steve from '../../assets/teams/Steve Mortensen-CF CVO.jpg';
import Ryan from '../../assets/teams/Ryan Kerekes-CFO.jpeg';
import Andrew from '../../assets/teams/Andrew James-DO.jpg';
import Troy from '../../assets/teams/Troy Clark-LLD.jpg';
import Rene from '../../assets/teams/Rene Ignacio-LPD.jpg';

const TeamFirst = () => {
  const teamMembers = [
    {
      name: 'Peter J. Novak',
      role: 'Chief Executive Officer',
      image: Peter,
      bio: 'CEO of scape with finance and law degrees (U of U, UNLV, BU). Former private equity leader, deploying $250M+ in startups. Focuses on team-building and client relationships. Enjoys fitness, cooking, and live music.',
      email: 'Peter.Novak@scapedbm.com'
    },
    {
      name: 'Steve Mortensen',
      role: 'Co-Founder & Chief Vision Officer',
      image: Steve,
      bio: 'With 20+ years in landscape design, Steve co-founded scape to create stunning, sustainable outdoor spaces. A Utah County native, he holds a B.S. in Business from UVU. Passionate about blending aesthetics and functionality, he enjoys golf, music, and family time.',
      email: 'info@scapedbm.com'
    },
    {
      name: 'Kent Christensen',
      role: 'Co-Founder & Chief Construction Officer',
      image: Kent,
      bio: 'A seasoned construction expert with 30+ years experience, Kent co-founded scape. Licensed general contractor and former USC baseball player, he specializes in large-scale projects. Enjoys grandkids, triathlons, and biking. Active in Utah trade associations.',
      email: 'info@scapedbm.com'
    },
    
    {
      name: 'Ryan Kerekes',
      role: 'Chief Financial Officer',
      image: Ryan,
      bio: 'CFO with 20+ years in finance, accounting degrees from U of U. Former IC Group CFO, skilled in strategic financial leadership. Loves fly fishing, hunting, and family time.',
      email: 'Finance@scapedbm.com'
    },
    {
      name: 'Andrew James',
      role: 'Director of Operations',
      image: Andrew,
      bio: 'Operations leader with a decade of project management expertise. BYU grad in political science. Ensures projects are on time, on budget. Enjoys skiing, hiking, and camping.',
      email: 'info@scapedbm.com'
    },
    {
      name: 'Troy Clark',
      role: 'Lead Landscape Designer',
      image: Troy,
      bio: 'Creative designer transforming visions into functional landscapes. UVU business grad with 20+ years in client-focused roles. Loves basketball, golf, and kids sports.',
      email: 'Design@scapedbm.com'
    },
    {
      name: 'René Ignacio',
      role: 'Lead Project Manager',
      image: Rene,
      bio: 'Brings 15+ years of project management expertise to scape, ensuring seamless execution from design to completion. With a background in civil engineering and construction, he excels at coordinating teams and delivering high-quality results on schedule.',
      email: 'Projects@scapedbm.com'
    }
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamContent}>
        {/* Added "The Team" heading */}
        <h2 className={styles.teamHeading}>The Team</h2>

        <div className={styles.teamMembers}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberImageContainer}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.memberImage}
                />
                <div className={styles.memberOverlay}>
                  <div className={styles.overlayContent}>
                    <h3>{member.name}</h3>
                    <p className={styles.overlayRole}>{member.role}</p>
                    <p className={styles.overlayBio}>{member.bio}</p>
                    <p className={styles.overlayEmail}>Email: {member.email}</p>
                  </div>
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamFirst;