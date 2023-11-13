/* eslint-disable import/no-unresolved */
import React from 'react';
import ProjectLayout from '../layouts/ProjectLayout';
import PageLayout from '../layouts/PageLayout';
import ProjectBox from '../components/ProjectBox';
import bookData from '../projects/books';
import styles from '../styles/ProjectLayout.module.css';

const Books = () => (
    <PageLayout pageHeader='Books'>
      <div className={styles.projectIntro}>
        <p>
          I&apos;ve published and self published a variety of books for a mix of ages.
          Read the descriptions below to find out more:
        </p>
        </div>
      <ProjectLayout>
        {bookData.map((book, i) => <ProjectBox project={book} key={i} />)}
      </ProjectLayout>

        <div className={styles.projectOutro}>
        <p>
          Psst, I&apos;m in the process of republishing some of these books.
          If it&apos;s sold out, keep an eye on my socials and they might be available soon!
        </p>
        </div>

    </PageLayout>
);

export default Books;
