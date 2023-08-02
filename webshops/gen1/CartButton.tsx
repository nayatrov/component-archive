import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartButton.module.css';

const cx = classNames.bind(styles);

// button to add to cart that is placed within ProductDisplay componeny
// on [id].tsx page

// could also be added to ProductBox component so that users can
// add to cart from home page / without navigating to to product page

// onAddToCart passed from ProductDisplay

// would need to be passed from ProductBox too if placed there

interface CartButtonProps {
  onAddToCart: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onAddToCart }) => {
  return <button onClick={onAddToCart} className={cx('cart-button')}>Add To Cart</button>;
};

export default CartButton;
