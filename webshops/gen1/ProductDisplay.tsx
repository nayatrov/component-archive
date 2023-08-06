import React, { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import styles from './ProductDisplay.module.css';
import CartButton from './CartButton';
import CheckoutButton from './CheckoutButton';
import ImageSlider from './ImageSlider';

const cx = classNames.bind(styles);

interface Product {
  id: string;
  title: string;
  price: number;
}

interface ProductDisplayProps {
  product: Product;
}


//ProductDisplay is the component used to display individual products
// all of their info, and the ability to add to cart

// used on each corresponding products page at [id].js
// route for the page is '/products/{id}'

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  // used to check whether to show checkout or cart button
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  // Generate the array of image URLs for the ImageSlider based on the product id
  const numPhotos = 3; // Change this to the actual number of photos you have for each product
  const imageUrls = Array.from(
    { length: numPhotos },
    (_, index) => `/productPhotos/${product.id}/${index + 1}.jpeg`
  );

  const handleAddToCart = (): void => {
    // Get the current cart from local storage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product already exists in the cart
    const existingProduct = currentCart.find((item: Product) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists, increment the quantity
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      // If the product doesn't exist, add a new item to the cart
      currentCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // After CartButton is clicked, we show CheckoutButton instead
    setIsCheckout(true);

    // Need to replace with an actual message across window eventually
    console.log('Added to cart:', product.title);
  };

  const handleCheckout = (): void => {
    setIsCheckout(false);
    router.push('/cart'); // Navigate to the Checkout page
  };

  return (
    <div className={cx('pd-container')}>
      <h1 className={cx('pd-title')}>{product.title}</h1>
      <ImageSlider images={imageUrls} />
      <p className={cx('pd-price')}>Price: ${product.price}</p>
      {isCheckout ? (
        <CheckoutButton onCheckout={handleCheckout} />
      ) : (
        <CartButton onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default ProductDisplay;
