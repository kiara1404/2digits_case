/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

import BlogCard from '../components/BlogCard/BlogCard';
import HeroImage from '../components/Hero/HeroImage';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from './page.module.css';
import Tag from '../components/Tag/Tag';

export default async function Blogs() {
  const { Page } = await PreprSdk.SinglePage({ slug: 'blog' });
  const { Blogs } = await PreprSdk.Blogs();
  const categories = Blogs?.items.map((blog) => blog.categories[0].slug) || [];

  const reducedCategories = categories?.reduce((result, category) => {
    if (!result?.includes(category)) {
      result.push(category);
    }
    return result;
  }, []);

  return (
    <>
      <HeroImage
        title={Page.page_header.title}
        description={Page.page_header?.text}
        image={Page?.page_header?.image}
        changeBanner
      />

      <SearchBar />

      <section className="m-auto w-10/12">
        <h2 className={`text-xl ${styles.title}`}>Topics</h2>

        <section className="mb-12 flex">
          <button>
            <Tag text="All blogs" />
          </button>

          {reducedCategories.map((category, index) => (
            <button key={index}>
             <Tag text={category} />
            </button>
          ))}
        </section>

        <section className="flex flex-wrap justify-between">
          {Blogs &&
            Blogs.items.map((blog, index) => (
              <Link href={`/blog/${blog._id}`}>
                <BlogCard
                  image={blog.banner_image.url}
                  title={blog.title}
                  text={blog?.content[0].text || ''}
                  category={blog?.categories[0].slug}
                  key={index}
                />
              </Link>
            ))}
        </section>
      </section>
    </>
  );
}
