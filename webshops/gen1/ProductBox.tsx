import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './ProductBox.module.css'; 

const cx = classNames.bind(styles);

interface ProductBoxProps {
  id: string;
  title: string;
  price: number;
}

// component for displaying indvidual products with image, title, and price

// meant to be used within Products.tsx in order to display all or some
// subset of products all at once on one page

// not to be confused with ProductDisplay, which is a component for 
// displaying all info about the product and occupying an entire page
// by itself 

// wrapped in Link element that navigates to individual product pages

// current version does not have an add to cart button and requires you
// to navigate to /products/{id} in order to add to cart, but adding
// the CartButton and CheckoutButton components to this element in 
// a conditional similar to how they are incorporated within ProductDisplay
// would be trivial if you wish to do so

const ProductBox: React.FC<ProductBoxProps> = ({ id, title, price }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={cx('pb-container')}>
        <img src={`/productPhotos/${id}/1.jpeg`} alt={title} className={cx('pb-img')}/>
        <div className={cx('pb-text-container')}>
            <h2 className={cx('pb-title')}>
                {title}
            </h2>
            <p className={cx('pb-price')}>
                ${price}
            </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
