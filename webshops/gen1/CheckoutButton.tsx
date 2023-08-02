import React from 'react';
import classNames from 'classnames/bind';
import styles from './CheckoutButton.module.css';

const cx = classNames.bind(styles);

// appears in place of CartButton after it is clicked in ProductDisplay 
// component. navigates to '/cart' to review order before navigating to
// the actual checkout page 

// onCheckout passed from ProductDisplay

interface CheckoutButtonProps {
  onCheckout: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onCheckout }) => {
  return (
    <button onClick={onCheckout} className={cx('checkout-button')}>
      Checkout
    </button>
  );
};

export default CheckoutButton;
