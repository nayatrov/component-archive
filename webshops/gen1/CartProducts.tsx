import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import QuantityCounter from './QuantityCounter';
import styles from './CartProducts.module.css';

const cx = classNames.bind(styles);

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProducts: React.FC = () => {
  const [cartData, setCartData] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve the cart data from local storage when the component mounts
    const storedCartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartData(storedCartData);
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number): void => {
    if (newQuantity === 0) {
      // Remove the product from the cart when the quantity becomes 0
      const updatedCartData = cartData.filter((product) => product.id !== productId);
      setCartData(updatedCartData);
    } else {
      // Update the quantity for the specific product in the cart
      const updatedCartData = cartData.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      );
      setCartData(updatedCartData);
    }
  };

  useEffect(() => {
    // Save the updated cart data to local storage whenever cartData changes
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [cartData]);

  // Calculate the total price
  const totalPrice = cartData.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className={cx('cart-products-container')}>
      <h2>Your Cart</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartData.map((product) => (
            <div key={product.id} className={cx('product-item')}>
              {/* Product details */}
              <div className={cx('product-info')}>
                <img
                  src={`/productPhotos/${product.id}/1.jpeg`}
                  className={cx('product-img')}
                  alt="Product"
                />
                <p className={cx('product-title')}>{product.title}</p>
                <p className={cx('product-price')}>Price: ${product.price}</p>
              </div>
              {/* Quantity counter */}
              <QuantityCounter
                quantity={product.quantity}
                onIncrease={() => handleQuantityChange(product.id, product.quantity + 1)}
                onDecrease={() => handleQuantityChange(product.id, product.quantity - 1)}
                onRemove={() => handleQuantityChange(product.id, 0)}
              />
            </div>
          ))}
          {/* Order Total, .toFixed(2) formats to 2 decimal points */}
          <div className={cx('order-total')}>
            <h3>Order Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartProducts;
