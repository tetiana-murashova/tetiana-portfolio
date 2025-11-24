import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const cls = [styles.btn, variant === 'ghost' ? styles.ghost : styles.primary]
    .filter(Boolean)
    .join(' ');
  return <button className={cls} {...props} />;
};

export default Button;
