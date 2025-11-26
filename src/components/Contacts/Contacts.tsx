import React, { useState } from 'react';
import Section from '../shared/Section/Section';
import styles from './Contacts.module.css';
import Button from '../shared/Button/Button';
import SocialLinks from '../shared/SocialLinks/SocialLinks';
import BussinessCard from '../BussinessCard/BussinessCard';

const Contacts: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function submitToAPI(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://ykcnj9w206.execute-api.ap-southeast-2.amazonaws.com/prod/email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: email,
            desc: message,
          }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed request');
      }

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <Section id="contacts" bg="muted">
      <h2 className={styles.title}>Contact me</h2>

      <BussinessCard />

      <div className={styles.content}>
        {status === 'success' ? (
          <div className={styles.success}>
            <h1>
              Thank you for your message! <br />I will get back to you soon.
            </h1>
          </div>
        ) : (
          <form className={styles.form} onSubmit={submitToAPI}>
            <label>
              Your email
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Message
              <textarea
                rows={5}
                placeholder="Hi Tetiana, I'd like to chat about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <Button type="submit">Send</Button>

            {status === 'error' && (
              <p className={styles.error}>Something went wrong. Try again later.</p>
            )}
          </form>
        )}

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
