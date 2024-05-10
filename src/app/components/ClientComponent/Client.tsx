'use client';

import { useCallback, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import BlogCard from '../BlogCard/BlogCard';
import Tag from '../Tag/Tag';
import styles from './client.module.css';

export default function Client({ categories, blogs }) {
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState(['']);
  const [search, setSearch] = useState(['']);

  const searchParams = useSearchParams();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
    //   setSearch(searchTerm);
      params.set('query', searchTerm);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {/* <SearchBar onSubmit={(e) => handleSearch(e.target.value)} /> */}
      <section className={`bg-light-gray ${styles.wrapper}`}>
        <div className="m-auto w-10/12">
          <h2 className={`text-lg ${styles.title}`}>Search for blogs</h2>

          <form
            className="m-auto flex">
            <input
              className={`grow bg-white ${styles.input}`}
              type="text"
              placeholder="Search"
              defaultValue={searchParams.get('query')?.toString()}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <input className={`ml-4 bg-purple  text-white ${styles.submit}`} type="submit" />
          </form>
        </div>
      </section>

      <section className="m-auto w-10/12">
        <h2 className={`text-xl ${styles.title}`}>Topics</h2>

        <section className="mb-12 flex">
          {/* <button> */}
          <Tag
            text="All blogs"
            onClick={() => router.push(pathname + '?' + createQueryString('sort', 'asc'))}
          />
          {/* </button> */}

          {categories.map((category: string, index: number) => (
            // <button>
            <Tag text={category} onClick={(x) => setSelected([category])} />
            // </button>
          ))}
        </section>

        <section className="flex flex-wrap justify-between">
          {blogs?.items.map((blog, index) => (
            <BlogCard
              image={blog.banner_image.url}
              title={blog.title}
              text={blog.content[0].text || ''}
              category={blog.categories[0].slug}
              id={blog._id}
              key={index}
            />
          ))}
        </section>
      </section>
    </>
  );
}
