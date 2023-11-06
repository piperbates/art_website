import ProjectLayout from '@/layouts/ProjectLayout'
import PageLayout from '../layouts/PageLayout'
import ProjectBox from '@/components/ProjectBox'
import bun from '../images/bun.png';
import princessElephant from '../images/princess_and_the_elephant.jpg'

export default function Home() {

  const bookData = [
    {
      title: "The Princess and the Elephant",
      image: princessElephant.src,
      imageDescription: "The cover of The Princess and the Elephant, by Ellen Mellor and Piper Strange",
      description: "Written by Ellen Mellor and illustrated by Piper Strange. The Princess and the Elephant is a sweet, fun and funny fairytale for children of all genders about about acceptance, belief and the importance of support and allyship. ",
      link: "https://www.amazon.com.au/Princess-Elephant-Ellen-Mellor/dp/1838426647"
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
        I've published and self published a variety of books for a mix of ages. Read the descriptions below to find out more:
      <ProjectLayout>
        {bookData.map((book, i)=>{
          return <ProjectBox project={book} key={i} />
        })}
      </ProjectLayout>
    </PageLayout>
  )
}
