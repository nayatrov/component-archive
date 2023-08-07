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

// navButtons are passed to the Navbar from here
// and were chosen as these 3 because first webshop was 
// relatively simple, but Navbar component can be
// passed as many buttons and routes as you need

// also made it so the text across the Banner component
// is passed to it from here

// Layout is incorporated into every page of my
// personal webshop including checkout/cart, but some
// sites choose to exclude banners and such from 
// their checkout pages so it is up to you 

const Layout: React.FC<LayoutProps> = () => {
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
