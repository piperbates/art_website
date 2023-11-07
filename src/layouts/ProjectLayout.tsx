import styles from '../styles/ProjectLayout.module.css';

const ProjectLayout = (
    {projectIntro, projectOutro, children}: {projectIntro: string, projectOutro: string, children: React.ReactNode}
    ) => {
    return <div className={styles.projectGallery}>
        <div className={styles.projectIntro}>
          {projectIntro}
        </div>
        {children}  

        <div className={styles.projectOutro}>
          {projectOutro}
        </div>  
    </div>
};

export default ProjectLayout;