import invisibleGirl from '@/images/projects/other/invisible_girl.jpg';
import castlesPodcast from '@/images/projects/other/podcast.png';
import picrew from '@/images/projects/other/picrew.png';

interface otherProjectDataTypes {
    title: string,
    image: string,
    imageDescription: string,
    description: string,
    link?: {href: string, linkText: string}
}

const otherProjectData: otherProjectDataTypes[] = [
  {
    title: 'The Invisible Girl - EP',
    image: invisibleGirl.src,
    imageDescription: 'The cover of The Invisible Girl, an EP written and performed by Piper Strange.',
    description: 'I wrote a bunch of songs and recorded them and released them as an EP. Folky indie vibes.',
    link: {
      href: 'https://piperstrange.bandcamp.com/album/the-invisible-girl',
      linkText: 'Listen on Bandcamp',
    },
  },
  {
    title: 'Rat Picrew',
    image: picrew.src,
    imageDescription: 'The logo for a rat picrew',
    description: 'I made a picrew! Create your own rat character',
    link: {
      href: 'https://picrew.me/en/image_maker/683189',
      linkText: 'Play it here',
    },
  },
  {
    title: 'Why are Castles Round Podcast',
    image: castlesPodcast.src,
    imageDescription: 'The logo for Why Are Castles Round? A history podcast.',
    description: 'My partner is a history nerd, we made a podcast.',
    link: {
      href: 'https://podcasts.apple.com/ie/podcast/why-are-castles-round-and-other-history-questions/id1551990374',
      linkText: 'Listen to all episodes here',
    },
  },
];

export default otherProjectData;
