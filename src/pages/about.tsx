import PageLayout from '@/layouts/PageLayout';
import styles from '@/styles/Page.module.css'
import Image from 'next/image';

import mugshot from '@/images/mugshot.jpg';
import SocialLinks from '@/components/SocialLinks';

const About = () => {
  return (
    <PageLayout pageHeader='About'>
      <div className={styles.content}>

        <div className={styles.mugshot}>
          <Image src={mugshot} alt="A photograph of Piper, a nonbinary person with blue hair" />
        </div>

      <p>Piper Strange is a UK based illustrator and comic artist specialising in work with queer themes.​</p>

      <p>Piper has always been an imaginative and creative individual, and spent most of their childhood making up adventures and drawing pictures. After leaving school, they studied at Warwickshire College and achieved a BTEC National Diploma in Art and Design.</p>

      <p>​Since college, they have worked with businesses and individuals, collaborating on a variety of projects from graphic design to children&lsquo;s illustration. They have also self published many of their own personal projects, including comics, illustrated books, and more.</p>
      
      <p>They now work as a Software Engineer and pursue their passion projects in their free time.</p>

      <div className={styles.socialsBox}>
        <SocialLinks />
      </div>
      </div>
    </PageLayout>
  )
}

export default About