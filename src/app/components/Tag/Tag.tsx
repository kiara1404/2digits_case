/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { useState } from 'react';
import styles from './Tag.module.css';

export default function Tag({ text, onClick }: { text: string, onClick: any }) {

  return (
    <button onClick={onClick}>
      <h6 className={`mr-2 bg-light-gray text-xs uppercase text-dark-blue ${styles.tag}`}>
        {text}
      </h6>
    </button>
  );
}
