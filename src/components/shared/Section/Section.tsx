import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  bg?: 'default' | 'muted' | 'dark';
};

const bgMap = {
  default: '#fff',
  muted: 'var(--bg)',
  dark: 'rgba(61,63,65,.5)',
};

const Section: React.FC<SectionProps> = ({ id, children, bg = 'default' }) => (
  <section id={id} style={{ background: bgMap[bg] }}>
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  </section>
);

export default Section;
