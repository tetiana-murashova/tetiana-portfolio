import React from 'react';
import { motion } from 'framer-motion';
import styles from './Banner.module.css';
import Button from '../shared/Button/Button';
import SocialLinks from '../shared/SocialLinks/SocialLinks';

const Banner: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bgWrap}>
        <img className={styles.bg} src="img/background.jpg" alt="Background" />
      </div>

      <motion.div
        className={styles.panel}
        initial={{ opacity: 0, y: 50, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className={styles.avatar} />
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello, I’m Tetiana
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I’m based in Melbourne and available for Front-End / Full-Stack roles (React +
            TypeScript + Node.js).
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button onClick={() => window.open('/Resume_Tetiana_Murashova.pdf', '_blank')}>
              Download CV
            </Button>
            <a href="#portfolio">
              <Button variant="ghost">View Projects</Button>
            </a>

            <a href="#contacts">
              <Button variant="ghost">Contact Me</Button>
            </a>
          </motion.div>

          <div className={styles.socials}>
            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Banner;
