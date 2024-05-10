import Image from 'next/image';

import styles from './BlogCard.module.css';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  text: string;
  category: string;
  id: string
}

const BlogCard = ({ image, title, text, category, id }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <Image src={image} width={400} height={300} className={styles.image} alt="" />

        {category && (
          <h6 className={`bg-light-gray text-xs uppercase text-dark-blue ${styles.tag}`}>
            {category}
          </h6>
        )}
      </div>

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.text}>{text}</p>

      <div className={`flex ${styles.button}`}>
       <Link href={`/blog/${id}`} >Lees meer</Link>

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
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </article>
  );
};
export default BlogCard;
