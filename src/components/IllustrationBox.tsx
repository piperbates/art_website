import React from 'react';
import Image from 'next/image';
import styles from '../styles/Illustration.module.css';
// eslint-disable-next-line import/no-unresolved
import { artDataTypes } from '../projects/illustrations';

interface props {
  image: artDataTypes
}

const IllustrationBox = ({ image }: props) => (
  <div className={styles.illustrationBox}>
    <div className={styles.illustrationWrapper}>
      <Image src={image.image} alt={image.imageDescription} fill />
    </div>
  </div>
);

export default IllustrationBox;
