import React from 'react';
import Section from '../shared/Section/Section';
import styles from './Feedback.module.css';

type FeedbackItem = {
  avatar: string;
  alt: string;
  title: string;
  name: string;
  body: string;
};

const feedbacks: FeedbackItem[] = [
  {
    avatar: 'img/feedback.png',
    alt: 'Person A',
    title: 'Chief Technology Officer at Access Teleheath',
    name: 'Michael Thyer',
    body: '“It was a pleasure to have Tetiana working as a developer in my team. Tetiana has a great work ethic and demonstrated ability to continuously up-skill. Tetiana also has a wide skill set allowing her to not only work in full stack development but also assist if needed across automated testing and design.”',
  },
  {
    avatar: 'img/feedback3.png',
    alt: 'Person B',
    title: 'Full Stack Developer at Access Teleheath',
    name: 'Billy Chui',
    body: '“I really enjoyed working with Tetiana at Access Telehealth. She played a big part in improving our platform and was always reliable and detail-oriented. Tetiana has a great mix of technical skill and teamwork — she’s proactive, communicates clearly, and brings a positive energy that makes collaboration easy and enjoyable.”',
  },
  {
    avatar: 'img/feedback2.png',
    alt: 'Person C',
    title: 'Holmesglen teacher. Subject: Design',
    name: 'Sruthy Korembith',
    body: '“Thank you for all your hard work. Your final website is well structured with a clean and professional style. You alsocreated a useable, functional and well-designed website, demonstrated the principlesof user-centred design and also meets the required accessibility standards. Excellent Work.”',
  },
  {
    avatar: 'img/feedback2.png',
    alt: 'Person D',
    title: 'Holmesglen teacher. Subject: Web essential',
    name: 'Sruthy Korembith',
    body: '“You website fulfils the project brief. Excellent, clean coding and professionally designed website. Your website was nicely balanced and consistent across all pages. I liked the colour scheme and navigation, really easy to explore. You have demonstrated the knowledge to create a professional website based on Html5, CSS3.”',
  },
];

const Feedback: React.FC = () => {
  return (
    <Section id="feedback" bg="dark">
      <h2 className={styles.title}>What people say</h2>
      <p className={styles.subtitle}>Quick snippets from colleagues and clients.</p>

      <div className={styles.list}>
        {feedbacks.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.avatar} className={styles.avatar} alt={item.alt} />
            <div className={styles.text}>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <div className={styles.cardName}>{item.name}</div>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Feedback;
