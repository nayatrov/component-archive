import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderSummary.module.css';

const cx = classNames.bind(styles);

interface Product {
  title: string;
  price: number;
  quantity: number;
}

const OrderSummary: React.FC = () => {
  const [cartData, setCartData] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve cart data from local storage
    const storedCartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartData(storedCartData);
  }, []);

  const calculateProductTotal = (product: Product): number => {
    return product.price * product.quantity;
  };

  // Calculate the order total
  const orderTotal = cartData.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  return (
    <div className={cx('order-summary')}>
      <h1 className={cx('os-heading')}>Order Summary</h1>
      {cartData.map((product, index) => (
        <div key={index} className={cx('product-line')}>
          <p className={cx('product-title')}>{product.title}</p>
          <p className={cx('product-quantity')}>{product.quantity}</p>
          <p className={cx('product-price')}>${calculateProductTotal(product).toFixed(2)}</p>
        </div>
      ))}
      <div className={cx('separator')} />
      <div className={cx('order-total')}>
        <p className={cx('total-title')}>Order Total:</p>
        <p className={cx('total-price')}>${orderTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
