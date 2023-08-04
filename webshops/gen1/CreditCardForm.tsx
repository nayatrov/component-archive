import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CreditCardForm.module.css';

const cx = classNames.bind(styles);

// onFormSubmit passes all data collected by the multiple useStates onto
// the parent component

interface CreditCardFormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  nameOnCard: string;
  creditCardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  phoneNumber: string;
  email: string;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ onFormSubmit }) => {
  const [nameOnCard, setNameOnCard] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const formData: FormData = {
      nameOnCard,
      creditCardNumber,
      expirationMonth,
      expirationYear,
      cvv,
      phoneNumber,
      email,
    };

    onFormSubmit(formData);
  };

  return (
    <div className={cx('credit-card-form')}>
      <div className={cx('form-group')}>
        <label>Name on Card</label>
        <input
          type="text"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Credit Card Number</label>
        <input
          type="text"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          maxLength={16}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Expiration Date</label>
        <div className={cx('expiration-date')}>
          <input
            type="text"
            placeholder="MM"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
            maxLength={2}
          />
          <span>/</span>
          <input
            type="text"
            placeholder="YY"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
            maxLength={2}
          />
        </div>
      </div>
      <div className={cx('form-group')}>
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          maxLength={3}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          maxLength={10}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreditCardForm;
