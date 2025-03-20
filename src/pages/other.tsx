/* eslint-disable import/no-unresolved */
import React from 'react';
import ProjectBox from '../components/ProjectBox';
import PageLayout from '../layouts/PageLayout';
import ProjectLayout from '../layouts/ProjectLayout';
import otherProjectData from '../projects/other';
import styles from '../styles/ProjectLayout.module.css';

// {
//   title: string,
//   image: string,
//   imageDescription: string,
//   description: string,
//   link?: {href: string, linkText: string}
// }

const Other = () => (
  <PageLayout pageHeader='Other'>
    <div className={styles.projectIntro}>
      Projects that don&lsquo;t fit into another category go here,
      I make a lot of random nonsense and it&lsquo;s gotta go somewhere!
    </div>
    <ProjectLayout>
      {otherProjectData.map((project, i) => <ProjectBox project={project} key={i} />)}
    </ProjectLayout>
  </PageLayout>
);

export default Other;
