import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Navbar.module.css';

const cx = classNames.bind(styles);

interface NavbarProps {
  b1: string;
  b2: string;
  b3: string;
  href1: string;
  href2: string;
  href3: string;
}

const Navbar: React.FC<NavbarProps> = ({ b1, b2, b3, href1, href2, href3 }) => {
  return (
    <nav className={cx('navbar')}>
      <ul className={cx('nav-ul')}>
        <li className={cx('nav-link')}>
          <Link href={href1} className={cx('nav-text')}>{b1}</Link>
        </li>
        <li className={cx('nav-link')}>
          <Link href={href2} className={cx('nav-text')}>{b2}</Link>
        </li>
        <li className={cx('nav-link')}>
          <Link href={href3} className={cx('nav-text')}>{b3}</Link>
        </li>
      </ul>
    </nav>
  );
};

// example of passing props to this component:
// <Navbar b1="Home" b2="Privacy Policy" b3="Contact" href1="/" href2="/privacy-policy" href3="/contact"/>
export default Navbar;
