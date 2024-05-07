import Image from 'next/image';

import styles from './Hero.module.css';

const HeroImage = ({ title, description }) => {
  return (
    <>
      <div className={`h-2/3 w-full  ${styles.cover}`}>
        <div className={styles.textBlock}>
          <h1 className="uppercase m-auto">{title}</h1>
          <p className='m-auto'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
