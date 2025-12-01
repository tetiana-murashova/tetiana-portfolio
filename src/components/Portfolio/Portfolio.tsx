import React from 'react';
import Section from '../shared/Section/Section';
import Button from '../shared/Button/Button';
import styles from './Portfolio.module.css';
import LikeButton from '../shared/LikeButton/LikeButton';

type Project = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Murray Irrigation Dashboard',
    excerpt:
      'A real-time data visualization dashboard using React and Chart.js. Implemented zoomable time-series charts, dynamic filtering of sites/assets/tags.',
    image: 'portfolio/p1.png',
    href: 'https://murray-irrigation-dashboard.vercel.app',
  },
  {
    id: 'p2',
    title: 'Role-Based User Filtering',
    excerpt:
      'A small role-filtering feature that selects only admins and managers from a list of users. This helps ensure that only authorized people get elevated access in the app.',
    image: 'portfolio/p2.png',
    href: 'https://zeller-coding-challenge2.vercel.app',
  },
  {
    id: 'p3',
    title: 'Excuse Generator',
    excerpt:
      'A small React app that randomly selects and formats excuses from a JSON dataset. Includes category filtering, clipboard copy, and animated UI feedback.',
    image: 'portfolio/p3.png',
    href: 'https://excuse-generator-machine-5pdtah04c-tetianas-projects-c71d5b21.vercel.app',
  },
  {
    id: 'p4',
    title: 'Excuse Generator',
    excerpt: 'A small simple (HTML, CSS and JavaScript) App',
    image: 'portfolio/p4.png',
    href: 'https://tetiana-murashova.github.io/tic-tac-toe/',
  },
  {
    id: 'p5',
    title: 'Redesign and development of ‘IT Company’ Website',
    excerpt: 'Redesign of web site using clean HTML, CSS and JavaScript',
    image: 'portfolio/p5.png',
    href: 'https://tetiana-murashova.github.io/DiTec-front_page/',
  },
  {
    id: 'p6',
    title: 'Design and development "Epoxy Floor" Website',
    excerpt: 'Design and development web site using HTML, CSS, Bootstrap and JavaScript',
    image: 'portfolio/p6.png',
    href: 'https://tetiana-murashova.github.io/floors/',
  },
  {
    id: 'p7',
    title: 'Design and development of "Roof Painting" Website',
    excerpt: 'Design and development web site using HTML, CSS and JavaScript',
    image: 'portfolio/p7.png',
    href: 'https://tetiana-murashova.github.io/roof/',
  },
];

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" bg="default">
      <h2 className={styles.title}>Selected Projects</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.thumb}>
              <img src={p.image} alt={p.title} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.excerpt}>{p.excerpt}</p>
              <div className={styles.bottomRow}>
                <Button onClick={() => (p.href ? window.open(p.href, '_blank') : undefined)}>
                  View details{' '}
                  <span aria-hidden className={styles.arrow}>
                    →
                  </span>
                </Button>
              </div>
              <LikeButton id={p.id} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
