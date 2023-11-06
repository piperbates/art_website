import Image from 'next/image';
import styles from '../styles/ProjectLayout.module.css'
import { Patrick_Hand } from 'next/font/google';

const phfont = Patrick_Hand({
    weight: ["400"],
    subsets: ['latin'],
  })

const ProjectBox = ({project}: any) => {
    return (
        <div className={styles.projectBox}>
            <h1 className={phfont.className}>{project.title}</h1>
            <Image src={project.image} alt={project.imageDescription} width="250" height="250" />
            <div className={styles.projectDescription}>
                {project.description}
            </div>
            <hr className={styles.hr} />
        </div>
        )
};

export default ProjectBox;