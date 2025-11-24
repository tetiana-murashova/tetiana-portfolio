import React from 'react';
import styles from './SocialLinks.module.css';

const SocialLinks: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="https://www.facebook.com/murashova.tania?ref=bookmarks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={styles.link}
        >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tetiana-murashova-8b33aa16b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.link}
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a href="mailto:tetiana.murashova@gmail.com" aria-label="Email" className={styles.link}>
          <i className="fas fa-at" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
