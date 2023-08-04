import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddressForm.module.css';

const cx = classNames.bind(styles);

interface AddressFormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  billing: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: string;
  };
  separateShipping: boolean;
  shipping?: {
    firstName: string;
    lastName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

const AddressForm: React.FC<AddressFormProps> = ({ onFormSubmit }) => {
  const [billing, setBilling] = useState<FormData['billing']>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [separateShipping, setSeparateShipping] = useState(false);

  const [shipping, setShipping] = useState<FormData['shipping']>({
    firstName: '',
    lastName: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleBillingChange = (key: keyof FormData['billing'], value: string) => {
    setBilling((prevBilling) => ({ ...prevBilling, [key]: value }));
  };

  const handleShippingChange = (key: keyof FormData['shipping'], value: string) => {
    setShipping((prevShipping) => ({ ...prevShipping, [key]: value }));
  };

  const handleSubmit = () => {
    const formData: FormData = {
      billing,
      separateShipping,
      ...(separateShipping ? { shipping } : {}),
    };

    onFormSubmit(formData);
  };

  return (
    <div className={cx('address-form')}>
      <h3>Billing Address</h3>
      <div className={cx('form-group')}>
        <label>First Name:</label>
        <input
          type="text"
          value={billing.firstName}
          onChange={(e) => handleBillingChange('firstName', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Last Name:</label>
        <input
          type="text"
          value={billing.lastName}
          onChange={(e) => handleBillingChange('lastName', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={billing.phoneNumber}
          onChange={(e) => handleBillingChange('phoneNumber', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Street Address 1:</label>
        <input
          type="text"
          value={billing.streetAddress1}
          onChange={(e) => handleBillingChange('streetAddress1', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>Street Address 2 (optional):</label>
        <input
          type="text"
          value={billing.streetAddress2}
          onChange={(e) => handleBillingChange('streetAddress2', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>City:</label>
        <input
          type="text"
          value={billing.city}
          onChange={(e) => handleBillingChange('city', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>State:</label>
        <input
          type="text"
          value={billing.state}
          onChange={(e) => handleBillingChange('state', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>ZIP Code:</label>
        <input
          type="text"
          value={billing.zipCode}
          onChange={(e) => handleBillingChange('zipCode', e.target.value)}
        />
      </div>
      <div className={cx('form-group')}>
        <label>
          Separate Shipping Address:
          <input
            type="checkbox"
            checked={separateShipping}
            onChange={() => setSeparateShipping(!separateShipping)}
          />
        </label>
      </div>
      {separateShipping && (
        <div className={cx('shipping-address')}>
          <h3>Shipping Address</h3>
          <div className={cx('form-group')}>
            <label>First Name:</label>
            <input
              type="text"
              value={shipping.firstName}
              onChange={(e) => handleShippingChange('firstName', e.target.value)}
            />
          </div>
          <div className={cx('form-group')}>
            <label>Last Name:</label>
            <input
              type="text"
              value={shipping.lastName}
              onChange={(e) => handleShippingChange('lastName', e.target.value)}
            />
          </div>
          <div className={cx('form-group')}>
            <label>Street Address 1:</label>
            <input
                type="text"
                value={shipping.streetAddress1}
                onChange={(e) => handleShippingChange('streetAddress1', e.target.value)}
            />
          </div>
          <div className={cx('form-group')}>
            <label>Street Address 2 (optional):</label>
            <input
                type="text"
                value={shipping.streetAddress2}
                onChange={(e) => handleShippingChange('streetAddress2', e.target.value)}
            />
          </div>
          <div className={cx('form-group')}>
            <label>City:</label>
            <input
                type="text"
                value={shipping.city}
                onChange={(e) => handleShippingChange('city', e.target.value)}
            />
          </div>
          <div className={cx('form-group')}>
            <label>State:</label>
            <input
                type="text"
                value={shipping.state}
                onChange={(e) => handleShippingChange('state', e.target.value)}
            />
          </div>
          <div className={cx('form-group')}>
            <label>ZIP Code:</label>
            <input
                type="text"
                value={shipping.zipCode}
                onChange={(e) => handleShippingChange('zipCode', e.target.value)}
            />
          </div>
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddressForm;
