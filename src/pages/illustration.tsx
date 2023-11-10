import PageLayout from '../layouts/PageLayout'
import ProjectLayout from '@/layouts/ProjectLayout';
import styles from '@/styles/Page.module.css'

import artData from '@/projects/illustrations';
import IllustrationBox from '@/components/IllustrationBox';
import Link from 'next/link';

const Illustration = () => {
  return (
    <PageLayout pageHeader='Illustration'>
      <div className={styles.illustrationWrapper}>
      <ProjectLayout>
      {artData.map((art, i)=>{
          return <IllustrationBox image={art} key={i} />
        })}
      </ProjectLayout>

      <p>For more illustrations, check out my <Link href="http://www.instagram.com/piperstrangeart" target="_blank">Instagram</Link></p>

      </div>

    </PageLayout>
  )
}

export default Illustration
