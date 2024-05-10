'use client';

import { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import BlogCard from '../BlogCard/BlogCard';
import Tag from '../Tag/Tag';
import styles from './client.module.css';

interface Blog {
  banner_image: { url: string };
  categories: [{ slug: string }];
  content: [{ text: string }];
  title: string;
  _id: string;
}

export default function Client({ categories, blogs }: { categories: string[]; blogs: Blog[] }) {
  const router = useRouter();
  const pathname = usePathname();

  const [newData, setNewData] = useState<Blog[]>(blogs.items);
  const [selected, setSelected] = useState('');

  const searchParams = useSearchParams();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set('query', searchTerm);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
    setNewData(blogs.items);
  };

  const filterTags = (blogCategory: string) => {
    const arr: Blog[] = [];
    blogs.items.filter((item: Blog) => {
      if (item.categories[0].slug == blogCategory) {
        arr.push(item);
      } else {
        return arr;
      }

      setNewData(arr);
    });
  };

  return (
    <>
      <section className={`bg-light-gray ${styles.wrapper}`}>
        <div className="m-auto w-10/12">
          <h2 className={`text-lg ${styles.title}`}>Search for blogs</h2>

          <form className="m-auto flex">
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
          <Tag
            text="All blogs"
            onClick={() => {
              setNewData(blogs.items);
              setSelected('All blogs');
            }}
            selected={selected}
          />

          {categories.map((category: string, index: number) => (
            <Tag
              text={category}
              onClick={() => {
                filterTags(category);
                setSelected(category);
              }}
              selected={selected}
              key={index}
            />
          ))}
        </section>

        <section className="flex flex-wrap justify-between">
          {newData.map((blog, index) => (
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
