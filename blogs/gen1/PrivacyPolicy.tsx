import React from 'react';
import classNames from 'classnames/bind';
import privacyPolicyContent from '../blogPosts/privacyPolicyContent';
import styles from './PrivacyPolicy.module.css';
import Link from 'next/link';

// I keep the text for my privacy policy as a content array in
// a separate folder and just import it instead of putting it all her

// The additional text after the imported content is a mandatory 
// addition to comply with my advertising partner (Ezoic)'s terms

const cx = classNames.bind(styles);

interface Section {
  heading: string;
  paragraph: string;
}

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={cx('pripol-container')}>
      <h1 className={cx('pripol-title')}>Privacy Policy</h1>
      {privacyPolicyContent.map((section: Section, index: number) => (
        <div key={index} className={cx('pripol-content-container')}>
          <h2>{section.heading}</h2>
          <p>{section.paragraph}</p>
        </div>
      ))}
      <div className={cx('pripol-content-container')}>
        <p>
          For more information on our privacy policy and terms with Ezoic Advertising please visit the link here:
        </p>
        <Link href={'http://g.ezoic.net/privacy/fungifiles.com/annualRequestSummary'}>
          http://g.ezoic.net/privacy/fungifiles.com/annualRequestSummary
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
