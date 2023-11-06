import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout'

export default function Home() {
  return (
    <PageLayout pageHeader='Comics'>
      Blah Blah Blah
      <ProjectLayout>
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </ProjectLayout>
    </PageLayout>
  )
}
