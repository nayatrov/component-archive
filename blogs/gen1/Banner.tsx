import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <Link href="/" passHref>
      <div className={cx('banner-link')}>
        <div className={cx('banner-container')}>
          <h1 className={cx('banner-text')}>{text}</h1>
        </div>
      </div>
    </Link>
  );
};

//example of passing props to this component:
// <Banner text="Website Name" />

export default Banner;
