import Image from 'next/image';
import styles from '../styles/ProjectLayout.module.css'
import bun from '../images/bun.png'

const ProjectBox = () => {
    return <div className={styles.projectBox}>
        <h1>Project Title</h1>
        <Image src={bun} alt="bun" width="250" height="250" />
        <div>
            Project description Project description Project description Project description Project description Project description Project description Project description Project description
        </div>
    </div>
};

export default ProjectBox;