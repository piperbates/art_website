import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout'
import bun from '../images/bun.png'

export default function Home() {

  const artData = [
    {
      title: "This is a Project",
      image: bun.src,
      imageDescription: "An illustration of a blue rabbit with wings",
      description: "Poo"
    },
    {
      title: "This is a Project",
      image: bun.src,
      imageDescription: "An illustration of a blue rabbit with wings",
      description: "Poo"
    },
    {
      title: "This is a Project",
      image: bun.src,
      imageDescription: "An illustration of a blue rabbit with wings",
      description: "Poo"
    }
  ]


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
