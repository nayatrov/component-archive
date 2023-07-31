import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactPage.module.css';

const cx = classNames.bind(styles);

interface ContactPageProps {
  adminEmail: string;
  firmEmail: string;
  author1: string;
  a1Email: string;
  author2: string;
  a2Email: string;
}

const ContactPage: React.FC<ContactPageProps> = ({
  adminEmail,
  firmEmail,
  author1,
  a1Email,
  author2,
  a2Email,
}) => {
  return (
    <div className={cx('cp-container')}>
      <h1 className={cx('cp-mh')}>Contact Us</h1>
      <h2 className={cx('cp-heading')}>Site Administrators</h2>
      <div className={cx('persons-div')}>
        <h3 className={cx('cp-l')}>Site Administrator:</h3>
        <h3 className={cx('cp-r')}>{adminEmail}</h3>
      </div>
      <div className={cx('persons-div')}>
        <h3 className={cx('cp-l')}>Development Firm:</h3>
        <h3 className={cx('cp-r')}>{firmEmail}</h3>
      </div>
      <h2 className={cx('cp-heading')}>Content Authors</h2>
      <div className={cx('persons-div')}>
        <h3 className={cx('cp-l')}>{author1}:</h3>
        <h3 className={cx('cp-r')}>{a1Email}</h3>
      </div>
      <div className={cx('persons-div')}>
        <h3 className={cx('cp-l')}>{author2}:</h3>
        <h3 className={cx('cp-r')}>{a2Email}</h3>
      </div>
    </div>
  );
};

export default ContactPage;
