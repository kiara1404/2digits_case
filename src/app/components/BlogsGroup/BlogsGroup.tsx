import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogsGroup.module.css';


interface Props {
  _id: string;
  banner_image: { url: string };
  title: string;
  content: [{ text: string }];
  categories: [{ slug: string }];
}

const BlogsGroup = ({ blogs, title }: { blogs: Props[]; title: string }) => {

  return (
    <section className={`w-10/12 m-auto`}>
      <h2 className={ `${styles.title}`}>{title}</h2>

      <div className="flex flex-wrap justify-between">
        {/*  eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {blogs.map((blog: Props, index: number) => (
          <BlogCard
            image={blog.banner_image.url}
            title={blog.title}
            text={blog.content[0].text}
            category={blog.categories[0].slug}
            id={blog._id}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogsGroup;