import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <section className={`bg-light-gray ${styles.wrapper}`}>
      <div className='w-10/12 m-auto'>
        <h2 className={`text-lg ${styles.title}`}>Search for blogs</h2>
        <div className="m-auto flex">
          <input className={`grow bg-white ${styles.input}`} type="text" placeholder='Search' />
          <input className={`bg-purple ml-4  text-white ${styles.submit}`} type="submit" />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
