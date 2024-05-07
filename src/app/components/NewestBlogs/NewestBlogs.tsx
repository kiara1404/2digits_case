/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from 'next/link';

import BlogCard from '../BlogCard/BlogCard';
import styles from './NewestBlogs.module.css';

interface Props {
  _id: string;
  banner_image: { url: string };
  title: string;
  content: [];
  categories: [];
}
const NewestBlogs = ({ blogs }: { blogs: Props[] }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>De nieuwste blogs</h2>

      <div className="flex justify-between">
        {blogs.map((blog, index) => (
          <Link href={`/blog/${blog._id}`} key={index}>
            <BlogCard
              image={blog.banner_image.url}
              title={blog.title}
              text={blog.content[0].text}
              category={blog.categories[0].slug}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewestBlogs;
