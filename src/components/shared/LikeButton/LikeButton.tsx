import React, { useState, useEffect } from 'react';
import styles from './LikeButton.module.css';

type LikeButtonProps = {
  id: string;
};

const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
  const storageKey = `likes-${id}`;
  const num = Math.floor(Math.random() * (800 - 600 + 1)) + 600;
  const [likes, setLikes] = useState(num);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setLikes(parseInt(stored, 10));
  }, [storageKey]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, String(newLikes));
  };

  return (
    <button className={styles.button} onClick={handleLike}>
      ❤️ {likes}
    </button>
  );
};

export default LikeButton;
