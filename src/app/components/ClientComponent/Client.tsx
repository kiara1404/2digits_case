/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import BlogCard from '../BlogCard/BlogCard';
import Tag from '../Tag/Tag';
import styles from './client.module.css';

interface BlogItem {
  banner_image: { url: string };
  categories: [{ slug: string }];
  content: [{ text: string }];
  title: string;
  _id: string;
}
interface Blogs {
  items: BlogItem[];
  total: number;
}

export default function Client({ categories, blogs }: { categories: string[]; blogs: Blogs }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [newData, setNewData] = useState<BlogItem[]>(blogs.items);
  const [selectedTag, setSelectedTag] = useState('');
  const [selected, setSelected] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 9;
  const totalPages = Math.ceil(blogs.total / 9);
  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleSearch = (searchTerm: string, limit: number, skip: number) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set('query', searchTerm);
      params.delete('limit', limit.toString());
      params.delete('skip', skip.toString());
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
    setNewData(blogs.items);
  };

  const handlePaginationNext = (skip: number, limit: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('skip', skip.toString());
    params.set('limit', limit.toString());
    router.replace(`${pathname}?${params.toString()}`);
    setNewData(blogs.items);
  };

  const handlePaginationBack = (skip: number, limit: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('skip', skip.toString());
    params.set('limit', limit.toString());
    router.replace(`${pathname}?${params.toString()}`);
    setNewData(blogs.items);
  };

  const filterTags = (blogCategory: string) => {
    const arr: BlogItem[] = [];
    blogs.items.filter((item: BlogItem) => {
      if (item.categories[0].slug == blogCategory) {
        arr.push(item);
      } else {
        return arr;
      }

      setNewData(arr);
    });
  };

  useEffect(() => {
    if (skip < blogs.total) {
      handlePaginationNext(skip, limit);
    }
    if (skip < blogs.total || skip > blogs.total) {
      handlePaginationBack(skip, limit);
    }
  }, [skip]);

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
              onChange={(e) => handleSearch(e.target.value, skip, limit)}
            />

            <input className={`ml-4 bg-purple  text-white ${styles.submit}`} type="submit" />
          </form>
        </div>
      </section>

      <section className="m-auto w-10/12">
        <h2 className={`text-xl ${styles.title}`}>Topics</h2>

        <section className="mb-12 flex flex-wrap">
          <Tag
            text="All blogs"
            onClick={() => {
              setNewData(blogs.items);
              setSelectedTag('All blogs');
            }}
            selected={selectedTag}
          />

          {categories.map((category: string, index: number) => (
            <Tag
              text={category}
              onClick={() => {
                filterTags(category);
                setSelectedTag(category);
              }}
              selected={selectedTag}
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

        <section className={`flex justify-center ${styles.pagination}`}>
          {skip > 0 && (
            <button
              onClick={() => {
                setSkip((prev) => prev - 9);
                setSelected((prev) => prev - 1);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          <section className="flex">
            {totalPagesArray.map((item, index) => (
              <p
                className={selected === item ? styles.selected : styles.paginationButton}
                key={index}>
                {item}
              </p>
            ))}
          </section>

          <button
            onClick={() => {
              setSkip((prev) => prev + 9);
              setSelected((prev) => prev + 1);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </section>
      </section>
    </>
  );
}
