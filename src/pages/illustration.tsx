import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout';

import artData from '@/projects/illustrations';

export default function Home() {
  return (
    <PageLayout pageHeader='Illustration'>
      Blah Blah Blah
      <ProjectLayout>
      {artData.map((art, i)=>{
          return <ProjectBox project={art} key={i} />
        })}
      </ProjectLayout>
    </PageLayout>
  )
}
