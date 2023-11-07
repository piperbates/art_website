import ProjectLayout from '@/layouts/ProjectLayout'
import PageLayout from '../layouts/PageLayout'
import ProjectBox from '@/components/ProjectBox'
import styles from '../styles/ProjectLayout.module.css'

import bookData from '@/projects/books'

export default function Home() {
  return (
    <PageLayout pageHeader='Books'>
        <div className={styles.bookIntro}>
          I&apos;ve published and self published a variety of books for a mix of ages. Read the descriptions below to find out more:
        </div>
      <ProjectLayout>
        {bookData.map((book, i)=>{
          return <ProjectBox project={book} key={i} />
        })}
      </ProjectLayout>

      <div className={styles.bookOutro}>
          Psst, I&apos;m in the process of republishing some of these books. If it&apos;s sold out, keep an eye on my socials and they might be available soon!
        </div>

    </PageLayout>
  )
}
