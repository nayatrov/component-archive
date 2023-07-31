import React from 'react';
import styles from './Namecard.module.css';
import Image from 'next/image';

interface Author {
  name: string;
}

interface NamecardProps {
  author: Author;
  description: string;
  image: string;
}

const Namecard: React.FC<NamecardProps> = ({ author, description, image }) => {
  return (
    <div className={styles['namecard-container']}>
      <div className={styles['namecard-content']}>
        <div className={styles['image-container']}>
          <Image src={image} alt={author.name} width={75} height={75} className={styles['author-image']} />
        </div>
        <div className={styles['info-container']}>
          <h3 className={styles['a-name']}>{author.name}</h3>
          <p className={styles['a-description']}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Namecard;
