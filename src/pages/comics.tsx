import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout'

import comicData from '@/projects/comics';

const Comics = () => {

  const projectData = {
    projectIntro: "Comics and stuff",
    projectOutro: "Comics footer"
  }

  return (
    <PageLayout pageHeader='Comics'>
      <ProjectLayout projectIntro={projectData.projectIntro} projectOutro={projectData.projectOutro}>
      {comicData.map((comic, i)=>{
          return <ProjectBox project={comic} key={i} />
        })}
      </ProjectLayout>
    </PageLayout>
  )
}

export default Comics
