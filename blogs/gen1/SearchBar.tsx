import React, { ChangeEvent, FormEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.css';

const cx = classNames.bind(styles);

// Define the prop interface to describe the expected props for the component.
interface SearchBarProps {
  handleSearch: (query: string) => void;
}

// Convert the component to TypeScript and provide the type for its props.
const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  // Define the handleChange event handler with type annotations.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    handleSearch(query);
  };

  // Define the handleSubmit event handler with type annotations.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={cx('search-form')}>
      <input
        type="text"
        placeholder="Search articles..."
        onChange={handleChange}
        className={cx('search-input')}
      />
    </form>
  );
};

export default SearchBar;
