import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout';
import styles from '@/styles/Page.module.css'

import artData from '@/projects/illustrations';

const Illustration = () => {

  const projectData = {
    projectIntro: "Illustration and stuff",
    projectOutro: "Illustration footer"
  }

  return (
    <PageLayout pageHeader='Illustration'>
      <div className={styles.illustrationWrapper}>
      <ProjectLayout projectIntro={projectData.projectIntro} projectOutro={projectData.projectOutro}>
      {artData.map((art, i)=>{
          return <ProjectBox project={art} key={i} />
        })}
      </ProjectLayout>
      </div>
    </PageLayout>
  )
}

export default Illustration
