import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout'

import comicData from '@/projects/comics';

export default function Home() {
  return (
    <PageLayout pageHeader='Comics'>
      Blah Blah Blah
      <ProjectLayout>
      {comicData.map((comic, i)=>{
          return <ProjectBox project={comic} key={i} />
        })}
      </ProjectLayout>
    </PageLayout>
  )
}
