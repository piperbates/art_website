import PageLayout from "@/layouts/PageLayout";
import ProjectLayout from "@/layouts/ProjectLayout";
import tarotCards from "@/projects/tarot";

import styles from '@/styles/ProjectLayout.module.css'

import Image from "next/image";
const Tarot = () => {
    return <PageLayout pageHeader="Tarot Cards">
        <div className={styles.projectIntro}>
                I love the art and history of tarot cards, and decided to try my hand at drawing my own set. This is the Major Arcana, the first 22 cards in tarot. I&apos;d like to eventually get these printed out for sale, but want to finish the whole deck first (and that&apos;s a lot of cards to make...)
            </div>
        <ProjectLayout>
            <div className={styles.subProjectBox}>
                {tarotCards.map((card, index)=>{
                    return <div className={styles.subProjectImageWrapper}><Image src={card.image} alt={card.name} fill key={index} /></div>
                })}
            </div>
        </ProjectLayout>
    </PageLayout>
}

export default Tarot;