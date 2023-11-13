import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Project.module.css';
// eslint-disable-next-line import/no-unresolved
import phfont from '../utils/phfont';

interface props {
  project: {
    title: string,
    link: {
      href: string,
      linkText: string
    },
    image: string,
    imageDescription: string,
    description: string
  }
}

const ProjectBox = ({ project }: props) => {
  const displayText = project.link
    ? <p className={styles.projectLinkText}><Link href={project.link.href} target='_blank'><button>{project.link.linkText}</button></Link></p>
    : <p className={styles.soldOutText}>Sold out</p>;

  return (
        <div className={styles.projectBox}>
            <h1 className={phfont.className}>{project.title}</h1>
            <div className={styles.projectImageWrapper}>
                <Image src={project.image} alt={project.imageDescription} fill />
            </div>
            <div className={styles.projectDescription}>
                <p>{project.description}</p>
                {displayText}
            </div>
            <hr className={styles.hr} />
        </div>
  );
};

export default ProjectBox;
