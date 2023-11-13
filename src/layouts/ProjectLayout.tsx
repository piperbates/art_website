import styles from '@/styles/ProjectLayout.module.css';
import phfont from '@/utils/phfont';

interface projectInfoInterface {
    title: string,
    id: string
}

const ProjectLayout = (
    {
        children, pageInfo
    }: {children: React.ReactNode, pageInfo?: projectInfoInterface}
    ) => {

        const projectTitleDisplay = () => {
            return pageInfo ? <div className={styles.projectSubtitle}>
            <h2 id={pageInfo.id} className={`${styles.projectSubtitleTag} ${phfont.className}`}>{pageInfo.title}</h2>
            </div>
            : null
        }

    return (
        <div>
            {projectTitleDisplay()}
            <div className={styles.projectGallery}>
                {children}  
            </div>
        </div>
    )
};

export default ProjectLayout;