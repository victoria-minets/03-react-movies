import { useState } from 'react';
import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

export interface Props {
  onSearch: (searchValue: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('');

  const handleSubmit = (formData: FormData) => {
    const searchValue = formData.get('query') as string;

    if (!searchValue) {
      toast.error('Please enter your search query.');
      return;
    }
    onSearch(searchValue);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={css.form} action={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
