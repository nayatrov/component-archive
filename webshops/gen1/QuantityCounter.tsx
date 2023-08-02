import React from 'react';
import classNames from 'classnames/bind';
import styles from './QuantityCounter.module.css';

const cx = classNames.bind(styles);

// all props passed from CartProducts

// quantity is stored in the 'cart' object kept in local storage

// onIncrease and onDecrease are linked to the corresponding arrow buttons
// and are both variants of one function to handle quantity change
// with neg/pos increments that is placed in CartProducts

// onRemove is a function that sets a specific products quantity to 
// 0 and removes it from CartProducts entirely when clicking the
// remove button - the same effect can be achieved by setting quantity
// to 0 with arrow buttons but remove button makes it faster in high
// quantities.

interface QuantityCounterProps {
  quantity: number;
  onIncrease: (quantity: number) => void;
  onDecrease: (quantity: number) => void;
  onRemove: () => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className={cx('qc-container')}>
      <div className={cx('arrow-container')}>
        <button className={cx('arrow-button')} onClick={() => onIncrease(quantity)}>
          &uarr;
        </button>
        <h3 className={cx('q-text')}>{quantity}</h3>
        <button className={cx('arrow-button')} onClick={() => onDecrease(quantity)}>
          &darr;
        </button>
      </div>
      <button className={cx('remove-button')} onClick={onRemove}>
        Remove From Cart
      </button>
    </div>
  );
};

export default QuantityCounter;
