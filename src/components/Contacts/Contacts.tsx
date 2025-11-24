import React from 'react';
import Section from '../shared/Section/Section';
import styles from './Contacts.module.css';
import Button from '../shared/Button/Button';
import SocialLinks from '../shared/SocialLinks/SocialLinks';
import BussinessCard from '../BussinessCard/BussinessCard';

const Contacts: React.FC = () => {
  return (
    <Section id="contacts" bg="muted">
      <h2 className={styles.title}>Contact me</h2>

      <BussinessCard />
      <div className={styles.content}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = 'mailto:tetiana.murashova@gmail.com';
          }}
        >
          <label>
            Your email
            <input type="email" required placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows={5} placeholder="Hi Tetiana, I'd like to chat about..." />
          </label>
          <Button type="submit">Send</Button>
        </form>

        <div className={styles.side}>
          <p>
            I’m based in Melbourne and available for Front-End / Full-Stack roles (React +
            TypeScript + Node.js).
          </p>
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
