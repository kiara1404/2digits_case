import BlogCard from '../BlogCard/BlogCard';
import styles from './NewestBlogs.module.css';

const NewestBlogs = ({ blogs }) => {

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>De nieuwste blogs</h2>
      <div className="flex justify-between">
        {blogs?.map((blog) => (
          <BlogCard
            image={blog.banner_image.url}
            title={blog.title}
            text={blog.content[0].text}
            category={blog.categories[0].slug}
          />
        ))}
      </div>
    </section>
  );
};

export default NewestBlogs;
