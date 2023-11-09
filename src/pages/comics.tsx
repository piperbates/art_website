import ProjectBox from '@/components/ProjectBox'
import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout'
import styles from '@/styles/ProjectLayout.module.css'

import comicStripData from '@/projects/comics';
import graphicNovelData from '@/projects/graphicNovel';
import Link from 'next/link';

const Comics = () => {

  
  return (
    <PageLayout pageHeader='Comics'>
      <div className={styles.projectIntro}>
        <p>My comics can be split into two different categories: Comic Strips and Graphic Novels. Click on the links below to be taken to the section you're most interested in.</p>
        <ul>
          <li><Link href="#comic-strips">Comic Strips</Link></li>
          <li><Link href="#graphic-novel">Graphic Novel</Link></li>
        </ul>
      </div>

      <div className={styles.comicSubtitle}>
        <h2 id="comic-strips">Comic Strips</h2>
      </div>

      <ProjectLayout>
      {comicStripData.map((comic, i)=>{
          return <ProjectBox project={comic} key={i} />
        })}
        
      </ProjectLayout>

      <div className={styles.comicSubtitle}>
        <h2 id="graphic-novel">Graphic Novels</h2>
      </div>

      <ProjectLayout>
      {graphicNovelData.map((graphicNovel, i)=>{
          return <ProjectBox project={graphicNovel} key={i} />
        })}
      </ProjectLayout>


    </PageLayout>
  )
}

export default Comics
