import React from 'react';
import Link from 'next/link';
import ProjectBox from '@/components/ProjectBox';
import PageLayout from '@/layouts/PageLayout';
import ProjectLayout from '@/layouts/ProjectLayout';
import styles from '@/styles/ProjectLayout.module.css';
import { comicStripData, graphicNovelData } from '@/projects/comics';

const Comics = () => {
  const sectionInfo = {
    strips: {
      title: 'Comic Strips', id: 'comic-strips',
    },
    graphicNovels: {
      title: 'Graphic Novels', id: 'graphic-novels',
    },
  };

  return (
    <PageLayout pageHeader='Comics'>
      <div className={styles.projectIntro}>
        <p>
          My comics can be split into two different categories: Comic Strips and Graphic Novels.
          Click on the links below to be taken to the section you&apos;re most interested in.
        </p>

        <ul>
        <li><Link href={`#${sectionInfo.strips.id}`}>{sectionInfo.strips.title}</Link></li>
        <li><Link href={`#${sectionInfo.graphicNovels.id}`}>{sectionInfo.graphicNovels.title}</Link></li>
        </ul>
      </div>

      <ProjectLayout pageInfo={sectionInfo.strips}>
        {comicStripData.map((comic, i) => <ProjectBox project={comic} key={i} />)}
      </ProjectLayout>

      <ProjectLayout pageInfo={sectionInfo.graphicNovels}>
        {graphicNovelData.map((graphicNovel, i) => <ProjectBox project={graphicNovel} key={i} />)}
      </ProjectLayout>
    </PageLayout>
  );
};

export default Comics;
