'use client';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit, setSearch, search }) => {
  console.log('test', search);

  return (
    <section className={`bg-light-gray ${styles.wrapper}`}>
      <div className="m-auto w-10/12">
        <h2 className={`text-lg ${styles.title}`}>Search for blogs</h2>

        <form className="m-auto flex" onSubmit={onSubmit}>
          <input
            className={`grow bg-white ${styles.input}`}
            type="text"
            placeholder="Search"
            onKeyUp={setSearch}
          />
          <input className={`ml-4 bg-purple  text-white ${styles.submit}`} type="submit" />
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
