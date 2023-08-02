import React, { useState } from 'react';
import styles from './ImageSlider.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// images is an array of strings that are the paths to the images to be 
// included within the image slider

// images is passed from ProductDisplay

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={cx('slider-container')}>
      <button className={cx('arrow-button')} onClick={prevImage}>
        &lt;
      </button>
      <img src={images[currentImageIndex]} className={cx('slider-img')} alt="Product" />
      <button className={cx('arrow-button')} onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
