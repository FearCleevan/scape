import React, { useState } from 'react';
import styles from './FaqFirst.module.css';

const FaqFirst = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSections = [
    {
      question: 'What makes scape different from other landscape companies?',
      answer: 'scape combines 50+ years of combined expertise from our founders with innovative design approaches. Unlike traditional landscaping firms, we focus on creating spaces that foster relationships and community connections while blending sustainable practices with timeless artistry.'
    },
    {
      question: 'How does the design process work at scape?',
      answer: 'Our process begins with understanding your vision and lifestyle needs. We then create custom designs that balance aesthetics with functionality, followed by meticulous execution. Throughout the project, we maintain open communication to ensure the final result exceeds your expectations.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve the Wasatch Front region in Utah, including Salt Lake City, Park City, and surrounding communities. For large-scale projects, we may consider work in other areas of the Intermountain West.'
    },
    {
      question: 'How long does a typical landscaping project take?',
      answer: 'Project timelines vary based on scope and complexity. Small residential projects may take 2-4 weeks, while comprehensive estate landscapes can take 3-6 months. We provide detailed timelines during the planning phase and maintain strict project schedules.'
    },
    {
      question: 'Do you offer sustainable landscaping options?',
      answer: 'Absolutely. We specialize in water-wise designs, native plant selections, and eco-friendly materials. Our team can incorporate rainwater harvesting, efficient irrigation systems, and sustainable hardscapes to minimize environmental impact.'
    },
    {
      question: 'Can you work with existing landscape features?',
      answer: 'Yes, we often incorporate existing trees, structures, or hardscapes into new designs when possible. We assess each element for quality, condition, and design compatibility to create a cohesive final result.'
    },
    {
      question: 'What maintenance services do you offer after installation?',
      answer: 'We provide comprehensive maintenance programs including seasonal cleanups, irrigation management, pruning, and fertilization. Our team can create a custom maintenance plan tailored to your specific landscape needs.'
    },
    {
      question: 'How do you handle project budgets?',
      answer: "We're transparent about costs from the initial consultation. After understanding your vision, we provide detailed estimates and work within your budget parameters without compromising quality. Financing options are also available."
    },
    {
      question: 'What types of outdoor living spaces do you specialize in?',
      answer: 'We design and build all types of outdoor living spaces including patios, outdoor kitchens, fire features, water elements, sports courts, and complete backyard retreats. Each space is customized to your lifestyle and property characteristics.'
    },
    {
      question: 'How do I get started with my landscape project?',
      answer: 'Begin by contacting us for a complimentary consultation. We\'ll discuss your vision, assess your property, and outline the next steps. From there, we\'ll develop conceptual designs and a detailed project plan tailored to your goals.'
    }
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqContent}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <p className={styles.faqSubtitle}>Find answers to common questions about our landscape design and construction services</p>
        
        {faqSections.map((faq, index) => (
          <div key={index} className={styles.accordionSection}>
            <div 
              className={`${styles.accordionHeader} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className={styles.accordionIcon}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.accordionContent}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqFirst;