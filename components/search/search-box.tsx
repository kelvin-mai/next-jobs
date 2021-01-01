import { useState } from 'react';

import css from './search.module.css';
import { WorkIcon } from '../common/icons';

export interface SearchBoxProps {
  onSearch(query: string): void;
}

export const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState('');
  return (
    <form
      className={css['search-box']}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <div className={css['search-box-input']}>
        <WorkIcon />
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
