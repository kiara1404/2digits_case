import BlogCard from '../BlogCard/BlogCard';
import styles from './NewestBlogs.module.css'

const NewestBlogs = ({ blogs }) => {
  console.log(blogs[0].banner_image.url);

  return (
    <section>
      <h2 className={styles.title}>De nieuwste blogs</h2>
      <div className="flex justify-between">
        {blogs?.map((blog) => (
          <BlogCard image={blog.banner_image.url} title={blog.title} text={blog.content[0].text} />
        ))}
      </div>
    </section>
  );
};

export default NewestBlogs;
