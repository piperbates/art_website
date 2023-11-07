import ProjectLayout from '@/layouts/ProjectLayout'
import PageLayout from '../layouts/PageLayout'
import ProjectBox from '@/components/ProjectBox'
import bookData from '@/projects/books'

const Books = () => {

  const pageData = {
    projectIntro: "I've published and self published a variety of books for a mix of ages. Read the descriptions below to find out more:",
    projectOutro: "Psst, I'm in the process of republishing some of these books. If it&apos;s sold out, keep an eye on my socials and they might be available soon!"

  }


  return (
    <PageLayout pageHeader='Books'>
      <ProjectLayout projectIntro={pageData.projectIntro} projectOutro={pageData.projectOutro}>
        {bookData.map((book, i)=>{
          return <ProjectBox project={book} key={i} />
        })}
      </ProjectLayout>

    </PageLayout>
  )
}

export default Books