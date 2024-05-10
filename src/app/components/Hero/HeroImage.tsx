/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Image from 'next/image';



import styles from './Hero.module.css';


interface Props {
  image: { url: string; name: string } | string;
  title?: string;
  description?: string;
  bannerHeight?: string;
}

const HeroImage = ({ image, title, description, bannerHeight }: Props) => {
  return (
    <>
      <div className={`h-2/3 w-full  ${bannerHeight === 'large' ? styles.cover : styles.blogCover}`}>
        <Image
          src={image.url || image}
          width={600}
          height={600}
          alt={image.name || ''}
          className={styles.image}
        />

        <div className={styles.textBlock}>
          {title && <h1 className={`m-auto uppercase ${bannerHeight && styles.title}`}>{title}</h1>}

          {!bannerHeight && <p className="m-auto">{description}</p>}
        </div>
      </div>
    </>
  );
};

export default HeroImage;