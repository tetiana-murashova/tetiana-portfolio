import React from 'react';
import Section from '../shared/Section/Section';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <Section id="about" bg="muted">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.underline} />
        <p className={styles.lead}>
          I’m a Front-end developer focused on React, TypeScript, Node.js, and clean UI. I enjoy
          building accessible, production-ready interfaces and design systems.
        </p>

        <div className={styles.skills}>
          <div>
            <h3 className={styles.h3}>Core</h3>
            <ul>
              <li>React 18, TypeScript, React Hooks</li>
              <li>Node.js, Express</li>
              <li>GraphQL</li>
              <li>Sequelize</li>
              <li>Cypress</li>
              <li>Vite, ESLint, Prettier</li>
              <li>Chart.js, react-chartjs-2</li>
              <li>PostgreSQL</li>
              <li>Git/GitHub</li>
              <li>Jira</li>
              <li>Bugsnag</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.h3}>UI</h3>
            <ul>
              <li>CSS Modules, Tailwind</li>
              <li>MUI</li>
              <li>Framer Motion</li>
              <li>Responsive Patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
