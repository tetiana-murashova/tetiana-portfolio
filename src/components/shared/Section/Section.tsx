import React from 'react';
import styles from './Section.module.css';

type SectionProps = {
  id?: string;
  bg?: 'default' | 'dark';
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, bg = 'default', children }) => {
  return (
    <section id={id} className={`${styles.projectsSection} ${styles[bg]}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};

export default Section;
