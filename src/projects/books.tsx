import princessElephant from '../images/projects/books/princess_and_the_elephant.jpg';
import bonePrincess from '../images/projects/books/boneprincess.png';
import llamas from '../images/projects/books/llamas-book.png';
import loveYouLots from '../images/projects/books/loveyoulots.png';
import loveLetters from '../images/projects/books/loveletters.jpg';

interface bookDataTypes {
  title: string,
  image: string,
  imageDescription: string,
  description: string,
  link?: {href: string, linkText: string}
}

const bookData: bookDataTypes[] = [
  {
    title: 'The Princess and the Elephant',
    image: princessElephant.src,
    imageDescription: 'The cover of The Princess and the Elephant, by Ellen Mellor and Piper Strange',
    description: 'Written by Ellen Mellor and illustrated by Piper Strange. The Princess and the Elephant is a sweet, fun and funny fairytale for children of all genders about about acceptance, belief and the importance of support and allyship. ',
    link: {
      href: 'https://www.amazon.com.au/Princess-Elephant-Ellen-Mellor/dp/1838426647',
      linkText: 'Buy on Amazon',
    },
  },

  {
    title: 'The Bone Princesss',
    image: bonePrincess.src,
    imageDescription: 'The cover of The Bone Princess, written and illustrated by Piper Strange',
    description: 'In a graveyard, in the underworld, there lives a princess. This is the story of how this princess falls in love with the living. A story about grief, and death. A beautiful, chilling, illustrated short story by author and illustrator Piper Strange.',
  },

  {
    title: 'Llamas in Pajamas - The Book of Llama',
    image: llamas.src,
    imageDescription: 'The cover of Llamas in Pajamas - The Book of Llama, written and illustrated by Piper Strange',
    description: 'Llamas in Pajamas is a very silly book about very silly llamas. A collection of comics about llamas that get themselves into all sorts of situations, some lovely, some rather impossible. Complete nonsense from start to finish, great fun.',
  },

  {
    title: 'Love You Lots Like Polkadots',
    image: loveYouLots.src,
    imageDescription: 'The cover of Love You Lots Like Polkadots, written and illustrated by Piper Strange',
    description: 'A childrens book all about expressing love! This beautifully silly rhyming book will give you plenty of new ways of telling you and your loved ones just how much you love them. Love you loads like Warty Toads! Written and illustrated by Piper Strange.',
  },

  {
    title: 'Love Letters to No One in Particular',
    image: loveLetters.src,
    imageDescription: 'The cover of Love Letters to No One in Particular, by Piper Strange',
    description: 'A collection of poems about relationships, some dark and traumatic, some beautiful. Written in the aftermath of an abusive relationship, these poems explore loneliness, grief, and trauma.',
  },
];

export default bookData;
