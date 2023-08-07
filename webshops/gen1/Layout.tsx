import React, { ReactNode } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

interface NavButton {
  text: string;
  href: string;
}

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navButtons: NavButton[] = [
    { text: 'Home', href: '/' },
    { text: 'Contact', href: '/contact' },
    { text: 'Cart', href: '/cart' },
  ];

  const siteName = 'Store';

  return (
    <div>
      <Banner siteName={siteName} />
      <Navbar buttons={navButtons} />
      {children}
    </div>
  );
};

export default Layout;
