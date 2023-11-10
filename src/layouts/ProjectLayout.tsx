import styles from '../styles/ProjectLayout.module.css';

const ProjectLayout = (
    {children}: {children: React.ReactNode}
    ) => {
    return <div className={styles.projectGallery}>
        {children}  
    </div>
};

export default ProjectLayout;