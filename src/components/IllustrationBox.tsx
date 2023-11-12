import Image from 'next/image';
import styles from '@/styles/Illustration.module.css'


const IllustrationBox = ({image}: any) => {

  return (<div className={styles.illustrationBox}>
    <div className={styles.illustrationWrapper}>
      <Image src={image.image} alt={image.description} fill />
    </div>
  </div>)
}

export default IllustrationBox;