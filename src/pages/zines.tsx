/* eslint-disable import/no-unresolved */
import React from 'react';
import ProjectBox from '../components/ProjectBox';
import PageLayout from '../layouts/PageLayout';
import ProjectLayout from '../layouts/ProjectLayout';
import styles from '../styles/ProjectLayout.module.css';
import zineProjectData from '../projects/zines';

const Zines = () => (
  <PageLayout pageHeader='Zines'>
    <div className={styles.projectIntro}>
      A collection of Zines I have created. Feel free to print and distribute as you wish!
    </div>
    <ProjectLayout>
      {zineProjectData.map(
        (project, i) => <ProjectBox project={project} key={i} />,
      )}
    </ProjectLayout>
  </PageLayout>
);

export default Zines;
