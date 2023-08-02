import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartPageButtons.module.css';

const cx = classNames.bind(styles);

// the two buttons placed at the bottom of the 'cart' page, below
// the list of all items in the users cart

// onEmptyCart and onCheckout both passed from pages/cart.js

interface CartPageButtonsProps {
  onEmptyCart: () => void;
  onCheckout: () => void;
}

const CartPageButtons: React.FC<CartPageButtonsProps> = ({ onEmptyCart, onCheckout }) => {
  return (
    <div className={cx('cart-page-buttons-container')}>
      <button className={cx('empty-cart-button')} onClick={onEmptyCart}>
        Empty Cart
      </button>
      <button className={cx('checkout-button')} onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CartPageButtons;
