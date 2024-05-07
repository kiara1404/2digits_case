import Image from 'next/image';

import styles from './BlogCard.module.css';

const BlogCard = ({ image, title, text }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <Image src={image} width={400} height={300} className={styles.image} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div>
        <a>Lees meer</a>
      </div>
    </article>
  );
};
export default BlogCard;
