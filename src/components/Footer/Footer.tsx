import React from 'react';
import styles from './Footer.module.css';
import SocialLinks from '../shared/SocialLinks/SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <div className={styles.copy}>© {new Date().getFullYear()} Tetiana Murashova</div>
        <div className={styles.right}>
          <span>Made with React + TS + AWS</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
