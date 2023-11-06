import ProjectLayout from '@/layouts/ProjectLayout'
import PageLayout from '../layouts/PageLayout'
import ProjectBox from '@/components/ProjectBox'
import bun from '../images/bun.png';

export default function Home() {

  const bookData = [
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
    <PageLayout pageHeader='Books'>
        Blah Blah Blah
      <ProjectLayout>
        {bookData.map((book)=>{
          return <ProjectBox project={book} />
        })}
      </ProjectLayout>
    </PageLayout>
  )
}
