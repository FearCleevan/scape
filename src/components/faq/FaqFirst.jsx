import React, { useState } from 'react';
import styles from './FaqFirst.module.css';

const FaqFirst = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSections = [
    {
      question: 'What kind of services do you provide?',
      answer: (
        <>
          At scape, our core services revolve around the design and installation of custom landscapes that transform outdoor spaces into functional and beautiful environments. Our landscape design process begins with a collaborative consultation to understand your vision, followed by the creation of detailed plans that incorporate elements like native plantings, sustainable hardscapes, and water-efficient irrigation systems. We handle every aspect of installation, from grading and planting to constructing patios, walkways, and retaining walls, ensuring a seamless transition from concept to reality. Whether you’re dreaming of a lush garden, a modern courtyard, or a serene woodland retreat, our team delivers tailored solutions that enhance your property’s aesthetic and ecological value.
          <br /><br />
          In addition to comprehensive landscape services, we specialize in designing and installing stunning pools and water features that elevate outdoor living. Our pool designs range from sleek, contemporary infinity pools to naturalistic swimming ponds, each crafted to complement your landscape and lifestyle. We also create custom water features like fountains, waterfalls, and reflecting pools, integrating them harmoniously with surrounding greenery and hardscapes. Every project is executed with precision, using high-quality materials and eco-conscious practices to ensure durability, beauty, and sustainability, making your outdoor space a true extension of your home.
          <br /><br />
          <a href="/services" className={styles.faqLink}>A list of our services can be found here.</a>
        </>
      )
    },
    {
      question: 'What forms of payment do you accept?',
      answer: (
        <>
          At scape, we strive to make the payment process convenient and flexible for our clients. We accept a variety of payment methods, including major credit cards (Visa, Mastercard, American Express, and Discover), personal and business checks, and electronic bank transfers (ACH). For larger projects, we offer customized payment plans, which can be discussed during the consultation phase to align with your budget and project timeline. All payments are securely processed, and we provide detailed invoices for transparency. Please contact our office for specific details or to arrange a payment method that works best for you.
          <br /><br />
          We are also exploring the option of adding financing partners for those who may be interested in financing their landscape project long term. We hope to have an update on that shortly.
        </>
      )
    },
    {
      question: 'How do I get a quote?',
      answer: (
        <>
          Getting a quote from scape is simple and tailored to your needs. Start by contacting us through our website’s <a href="/contact" className={styles.faqLink}>contact form</a>, by phone (<a href="tel:18013191568" className={styles.faqLink}>801-319-1568</a>), or via email (<a href="mailto:info@scapedbm.com" className={styles.faqLink}>info@scapedbm.com</a>) to schedule an initial consultation. During this meeting, our team will visit your property to assess the space, discuss your vision, and understand your budget and preferences. We’ll then provide a detailed, no-obligation quote outlining the scope of work, design concepts, materials, and estimated costs. This personalized approach ensures transparency and aligns our services with your expectations, setting the foundation for a successful project.
          <br /><br />
          A quote can be obtained by simply filling out this <a href="/contact" className={styles.faqLink}>form here</a>.
        </>
      )
    },
    {
      question: 'How much will my landscape job cost?',
      answer: (
        <>
          The cost of your landscape job varies based on factors such as the project’s scope, materials, site conditions, and specific features like hardscaping, planting, or pools. To provide an accurate estimate, we begin with a personalized consultation to assess your property and discuss your vision and budget. Following this, we deliver a detailed, transparent quote outlining all costs, including design, labor, and materials. Our team works closely with you to tailor the project to your financial goals, offering flexible options to ensure a stunning, high-quality landscape that aligns with your expectations and investment.
        </>
      )
    },
    {
      question: 'Are you licensed and insured?',
      answer: (
        <>
          Yes, scape is fully licensed and insured to provide landscape design and installation services. We hold all necessary state and local licenses required for landscaping, pool installation, and related construction work, ensuring compliance with industry standards and regulations. Additionally, we carry comprehensive general liability insurance and workers’ compensation coverage to protect our clients, employees, and projects. Our commitment to professionalism and safety gives you peace of mind, knowing your property is in trusted hands throughout the entire process.
        </>
      )
    },
    {
      question: 'What’s the difference between hardscaping and softscaping?',
      answer: (
        <>
          <strong>Hardscaping</strong> refers to the non-living, structural elements of a landscape that provide form, function, and durability to outdoor spaces. At scape, our hardscaping services include designing and installing features like patios, walkways, retaining walls, fire pits, pergolas, and pool decks, using materials such as natural stone, pavers, concrete, or wood. These elements create defined areas for activities, improve accessibility, and add architectural interest to your property. Hardscaping is essential for establishing the backbone of a landscape, ensuring it is both practical and visually appealing while complementing the natural surroundings.
          <br /><br />
          <strong>Softscaping</strong>, on the other hand, encompasses the living, organic components of a landscape that bring color, texture, and life to the design. This includes the selection and installation of plants, trees, shrubs, flowers, and turf, as well as soil preparation and mulching. At scape, our softscaping focuses on creating vibrant, sustainable gardens using native and climate-adaptive plants to enhance biodiversity and reduce maintenance. By thoughtfully combining softscaping with hardscaping, we craft cohesive outdoor environments that balance beauty, ecology, and functionality, tailored to your vision and lifestyle.
        </>
      )
    },
    {
      question: 'When should I have landscaping done?',
      answer: (
        <>
          The ideal time for landscape installation depends on your project goals, local climate, and the types of features being installed, but at scape, we recommend spring and fall as the most favorable seasons for most projects. Spring offers moderate temperatures and increased rainfall, creating optimal conditions for planting trees, shrubs, and perennials, as their roots can establish before the heat of summer. Similarly, fall provides cooler weather and moist soil, which supports plant growth and allows new installations to settle in before winter dormancy. For hardscaping elements like patios, walkways, or pools, these seasons also provide stable weather for construction, ensuring efficient progress and high-quality results.
          <br /><br />
          However, landscape installation can be done year-round with proper planning, and scape tailors each project to maximize success regardless of the season. For example, summer installations can work well for hardscaping or drought-tolerant plants, though extra irrigation may be needed. Winter is often suitable for structural projects like retaining walls or indoor planning for spring implementation, especially in milder climates. During your consultation, we assess your site, timeline, and vision to recommend the best schedule, ensuring your landscape thrives and aligns with your desired completion date.
        </>
      )
    },
    {
      question: 'Does landscaping improve my property value?',
      answer: (
        <>
          Yes, well-designed landscaping can significantly enhance your property’s value by improving curb appeal, functionality, and overall aesthetic. Studies from the National Association of Realtors and the American Society of Landscape Architects suggest that professional landscaping can increase a home’s resale value by 5-15%, depending on the scope and quality of the work. At scape, our custom designs—featuring elements like lush gardens, elegant hardscapes, and inviting outdoor living spaces—create a strong first impression that attracts potential buyers. Beyond aesthetics, strategic landscaping can also improve energy efficiency by providing shade or windbreaks, adding further value to your property.
          <br /><br />
          The extent of the value increase depends on the type and scale of the landscaping project. Thoughtfully designed features such as patios, fire pits, or pools not only expand usable living space but also appeal to buyers seeking low-maintenance, high-impact outdoor areas. Softscaping with native plants and sustainable irrigation systems can reduce long-term maintenance costs, making your property more attractive in competitive markets. At scape, we work closely with you to prioritize improvements that align with your budget and maximize return on investment, ensuring your landscape enhances both your lifestyle and your home’s marketability.
        </>
      )
    },
    {
      question: 'Who will be the ones working on my landscape?',
      answer: (
        <>
          At scape, your landscape project is handled by a dedicated team of skilled professionals, including our experienced landscape designers, horticulturists, and licensed contractors, all under the supervision of our company's co-founders Steve and Kent. Depending on the scope of your job, specialized crew members, such as masons for hardscaping or pool installation experts, may also be involved to ensure precision and quality. We take pride in our in-house team’s expertise and commitment to craftsmanship, occasionally collaborating with trusted, vetted subcontractors for specific technical tasks. Throughout the process, our co-founders oversee every detail, keeping you informed and ensuring your vision is brought to life with professionalism and care.
          <br /><br />
          <a href="/team" className={styles.faqLink}>A list of our team members can be found here.</a>
        </>
      )
    },
    {
      question: 'What kind of residential clients do you work for?',
      answer: (
        <>
          scape proudly serves a diverse range of residential clients, from homeowners looking to enhance their backyards to property developers seeking to elevate community spaces. Whether you’re a busy professional wanting a low-maintenance urban oasis, a family desiring a vibrant outdoor play area, or a retiree envisioning a serene garden retreat, our team tailors each project to your unique lifestyle and preferences. No project is too big or small—we work on everything from compact city lots to expansive estates, delivering personalized, high-quality landscape designs that transform your home’s outdoor space into a functional and beautiful extension of your living environment.
        </>
      )
    },
    {
      question: 'What type of warranty do you provide on the work you performed?',
      answer: (
        <>
          At scape, we stand behind the quality of our luxury landscape design and installation with comprehensive warranties tailored to the scope of your project. Our standard warranty includes a three-year guarantee on all pavers and a one-year guarantee on all other aspects of your project, ensuring they establish successfully with proper care. For specialized features like pools or irrigation systems, we provide extended warranties in partnership with trusted manufacturers, typically ranging from three to five years. Each warranty is detailed in your project contract, and our team is committed to addressing any concerns promptly to ensure your landscape remains a lasting investment.
        </>
      )
    },
    {
      question: 'When will you be able to start my job?',
      answer: (
        <>
          At scape, the timeline to start your luxury landscape project depends on factors such as project scope, current workload, and seasonal considerations along the Wasatch Front. After your initial consultation and project approval, we typically schedule a start date within 4-8 weeks, though smaller projects or urgent requests may be accommodated sooner, pending availability. Our team provides a detailed timeline during the planning phase, factoring in design finalization, permitting, and optimal weather conditions for installation. We prioritize clear communication to align with your schedule, ensuring a seamless start to transforming your outdoor space. Additionally, if you are currently building your home, we will work with your home builder to layer in the landscape features, though most of the work will be typically done upon the completion of the interior of your home.
        </>
      )
    },
    {
      question: 'How do I maintain my pavers longterm?',
      answer: (
        <>
          Keeping your pavers in pristine condition is simple with regular care. Sweep or rinse them with a garden hose to remove dirt, leaves, or debris, and use a mild detergent with a stiff brush for stubborn stains like oil or grease. We strongly recommend having your pavers professionally sealed every 1-2 years to enhance color, protect against weeds, and stabilize joint sand, especially in the variable climate of the Wasatch Front. Avoid harsh chemicals or high-pressure washing, which can damage the surface or dislodge joints. For persistent issues or professional sealing and repairs, our team is ready to ensure your pavers remain a luxurious highlight of your landscape.
        </>
      )
    },
    {
      question: 'What happens if we decide to change something during the course of construction?',
      answer: (
        <>
          At scape, we understand that your vision may evolve during construction, and we’re committed to accommodating changes while keeping your project on track. If you decide to modify elements of your luxury landscape, such as altering a design feature or adding new components, we follow a streamlined change order process. You’ll discuss the proposed changes with your project manager, who will assess the impact on scope, timeline, and budget. We then provide a revised bid detailing the additional costs or adjustments, which requires your approval before proceeding. This ensures transparency and alignment, allowing us to seamlessly integrate your updates while maintaining the high-quality craftsmanship you expect from Scape.
        </>
      )
    },
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