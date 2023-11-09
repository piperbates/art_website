import Image from 'next/image';
import styles from '../styles/ProjectLayout.module.css'
import { Patrick_Hand } from 'next/font/google';
import Link from 'next/link';

const phfont = Patrick_Hand({
    weight: ["400"],
    subsets: ['latin'],
  })

const ProjectBox = ({project}: any) => {

    const displayText = () => {
       return project.link ? <p><Link href={project.link.href} target='_blank'>{project.link.linkText}</Link></p>
                     : <p className={styles.soldOutText}>Sold out</p>
        
    }

    return (
        <div className={styles.projectBox}>
            <h1 className={phfont.className}>{project.title}</h1>
            <div className={styles.projectImageWrapper}>
                <Image src={project.image} alt={project.imageDescription} fill />
            </div>
            <div className={styles.projectDescription}>
                <p>{project.description}</p>
                {displayText()}
            </div>
            <hr className={styles.hr} />
        </div>
        )
};

export default ProjectBox;