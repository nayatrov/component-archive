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
