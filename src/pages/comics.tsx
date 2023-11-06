import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout'
import bun from '../images/bun.png'

export default function Home() {

  const comicData = [
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
    <PageLayout pageHeader='Comics'>
      Blah Blah Blah
      <ProjectLayout>
      {comicData.map((book, i)=>{
          return <ProjectBox project={book} key={i} />
        })}
      </ProjectLayout>
    </PageLayout>
  )
}
