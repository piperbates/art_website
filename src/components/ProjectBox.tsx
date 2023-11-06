import Image from 'next/image';
import styles from '../styles/ProjectLayout.module.css'
import { Patrick_Hand } from 'next/font/google';
import Link from 'next/link';

const phfont = Patrick_Hand({
    weight: ["400"],
    subsets: ['latin'],
  })

const ProjectBox = ({project}: any) => {
    return (
        <div className={styles.projectBox}>
            <h1 className={phfont.className}>{project.title}</h1>
            <div className={styles.projectImageWrapper}>
                <Image objectFit='contain' src={project.image} alt={project.imageDescription} fill />
            </div>
            <div className={styles.projectDescription}>
                <p>{project.description}</p>
                {project.link && <p><Link href={project.link}>Buy on Amazon</Link></p>}
            </div>
            <hr className={styles.hr} />
        </div>
        )
};

export default ProjectBox;