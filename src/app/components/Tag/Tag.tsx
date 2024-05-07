/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import styles from './Tag.module.css';

export default function Tag({ text }: { text: string }) {
  return (
    <h6 className={`bg-light-gray text-dark-blue mr-2 text-xs uppercase ${styles.tag}`}>{text}</h6>
  );
}
