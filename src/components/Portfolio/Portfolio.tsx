import React from 'react';
import Section from '../shared/Section/Section';
import Button from '../shared/Button/Button';
import LikeButton from '../shared/LikeButton/LikeButton';
import styles from './Portfolio.module.css';

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
    excerpt: 'A small role-filtering feature that selects only admins and managers.',
    image: '/portfolio/p2.png',
    href: 'https://zeller-coding-challenge2.vercel.app',
  },
  {
    id: 'p3',
    title: 'Excuse Generator',
    excerpt: 'Random excuse generator with category filtering and animated UI.',
    image: '/portfolio/p3.png',
    href: 'https://excuse-generator-machine-5pdtah04c-tetianas-projects-c71d5b21.vercel.app',
  },
  {
    id: 'p4',
    title: 'Tic-Tac-Toe',
    excerpt: 'Simple (HTML, CSS, JS) game implementation.',
    image: '/portfolio/p4.png',
    href: 'https://tetiana-murashova.github.io/tic-tac-toe/',
  },
  {
    id: 'p5',
    title: 'Redesign of ‘IT Company’ Website',
    excerpt: 'Clean HTML, CSS and JavaScript redesign.',
    image: '/portfolio/p5.png',
    href: 'https://tetiana-murashova.github.io/DiTec-front_page/',
  },
  {
    id: 'p6',
    title: '“Epoxy Floor” Website',
    excerpt: 'Design + development with Bootstrap.',
    image: '/portfolio/p6.png',
    href: 'https://tetiana-murashova.github.io/floors/',
  },
  {
    id: 'p7',
    title: '“Roof Painting” Website',
    excerpt: 'Design and development using HTML/CSS/JS.',
    image: '/portfolio/p7.png',
    href: 'https://tetiana-murashova.github.io/roof/',
  },
];

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" bg="default">
      <h2 className="text-center mb-8 text-3xl font-semibold">Selected Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 p-1 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className={`relative pb-20 rounded-xl bg-gray-200 shadow-xl transition-transform duration-200 hover:-translate-y-1 card`}
          >
            <img src={p.image} alt={p.title} className="w-full h-auto" />

            <div className="p-4">
              <h3 className={`${styles.cardTitle} text-lg font-semibold`}>{p.title}</h3>
              <p className="text-sm mb-4 line-clamp-5">{p.excerpt}</p>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <Button>
                View details <span className={styles.arrow}>→</span>
              </Button>
              <LikeButton id={p.id} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
