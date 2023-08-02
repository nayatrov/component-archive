import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

// banner to be placed at top of site with logos on either side of text
// whole component is wrapped in a link that redirects to the homepage

// siteName passed from /src/components/layout.js 

interface BannerProps {
  siteName: string;
}

const Banner: React.FC<BannerProps> = ({ siteName }) => {
  return (
    <Link href="/" passHref>
      <div className={cx('banner-link')}>
        <div className={cx('banner-container')}>
          <img className={cx('banner-img')} src="/bannerlogo.png" alt="logo" />
          <h1 className={cx('banner-text')}>{siteName}</h1>
          <img className={cx('banner-img')} src="/bannerlogo.png" alt="logo" />
        </div>
      </div>
    </Link>
  );
};

export default Banner;
