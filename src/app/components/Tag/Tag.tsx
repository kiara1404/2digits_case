/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import styles from './Tag.module.css';

export default function Tag({
  text,
  onClick,
  selected,
}: {
  text: string;
  onClick?: () => void;
  selected?: string;
}) {
  const isSelected = selected === text;

  return (
    <>
      {isSelected ? (
        <button onClick={onClick}>
          <h6 className={`mr-2 bg-purple text-xs uppercase text-white ${styles.selected}`}>
            {text}
          </h6>
        </button>
      ) : (
        <button onClick={onClick}>
          <h6 className={`mr-2 bg-light-gray text-xs uppercase text-dark-blue ${styles.tag}`}>
            {text}
          </h6>
        </button>
      )}
    </>
  );
}
