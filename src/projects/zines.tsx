import businessCard from '../images/projects/zines/business-card.png';
import zineTemplate from '../images/projects/zines/zine-template.png';
import howTo from '../images/projects/zines/how-to.png';

interface zineProjectData {
  title: string,
  image: string,
  imageDescription: string,
  description: string,
  link?: { href: string, linkText: string }
}

const zineProjectData: zineProjectData[] = [
  {
    title: 'Zine template',
    image: zineTemplate.src,
    imageDescription: 'An image of a zine',
    description: 'Less of a zine, more of a template to create your own. This works best with A4 size paper, approximately standard size paper in the US. Double check with your printer before committing to the design!.',
    link: { href: zineTemplate.src, linkText: 'View bigger to save' },
  },
  {
    title: 'Zine tutorial',
    image: howTo.src,
    imageDescription: 'An image of a zine',
    description: 'Another not-technically-a-zine, but a tutorial on how to fold and cut an A4 / standard size zine. To be used with the zine template to print and make your own zines, or just as a guideline to making zines at all!',
    link: { href: howTo.src, linkText: 'View bigger' },
  },
  {
    title: 'A business card',
    image: businessCard.src,
    imageDescription: 'An image of a zine',
    description: 'A zine I created to replace my business cards, because business cards are overrated.',
    link: { href: businessCard.src, linkText: 'View bigger' },
  },
];

export default zineProjectData;
