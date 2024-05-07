/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';

import styles from './Hero.module.css';

interface Props {
  image: string | { url: string; name: string };
  title?: string;
  description?: string;
  changeBanner?: boolean;
}

const HeroImage = ({ image, title, description, changeBanner }: Props) => {
  return (
    <>
      <div className={`h-2/3 w-full  ${changeBanner ? styles.blogCover : styles.cover}`}>
        <Image
          src={image.url || image}
          width={600}
          height={600}
          alt={image.name}
          className={styles.image}
        />
        <div className={styles.textBlock}>
          {title && <h1 className={`m-auto uppercase ${changeBanner && styles.title}`}>{title}</h1>}
          {!changeBanner && <p className="m-auto">{description}</p>}
        </div>
      </div>
    </>
  );
};

export default HeroImage;
