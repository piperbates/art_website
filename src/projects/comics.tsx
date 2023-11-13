import rats from '@/images/projects/comics/strips/rats.jpg';
import llamas from '@/images/projects/comics/strips/llamas.png';
import nonsense from '@/images/projects/comics/strips/nonsense_comics.png';
import lib from '@/images/projects/comics/graphic-novels/life_is_beautiful.png';
import pursuitMagic from '@/images/projects/comics/graphic-novels/pursuitmagic.jpg';
import scienceRats from '@/images//projects/comics/graphic-novels/science-rats.png';
import worryComic from '@/images//projects/comics/graphic-novels/worry-comic.png';
import nameComic from '@/images//projects/comics/graphic-novels/name-comic.jpg';
import ppgvsbm from '@/images//projects/comics/graphic-novels/ppgvsbm.png';
import spaceBunnies from '@/images//projects/comics/graphic-novels/space_bunnies.png';


interface comicStripDataTypes {
  title: String,
  image: String,
  imageDescription: String,
  description: String,
  link?: {href: String, linkText: String}
}

interface graphicNovelDataTypes {
  title: String,
  image: String,
  imageDescription: String,
  description: String,
  link?: {href: String, linkText: String}
}


export const comicStripData: comicStripDataTypes[] = [
  {
    title: "Here Come the Rats",
    image: rats.src,
    imageDescription: "An illustration hooded rat, with the caption 'I will pee on everything you love'",
    description: "Rat comics! I started to draw these inspired by my own pet rats, and the mischief they'd get up to.",
    link: {
      href: "https://www.instagram.com/piperstrangecomics/",
      linkText:  "View on Instagram"
  }
  },
  {
    title: "Llamas in Pajamas",
    image: llamas.src,
    imageDescription: "The cover image of Llamas in Pajamas",
    description: "Llamas in Pajamas were inspired by a squiggly doodle of a llama that I drew that had a dorky face that made me laugh. The comic strips are sometimes completely nonsensical and always very silly.",
    link: {
      href: "https://tapas.io/series/Llamas-in-Pajamas/info",
      linkText:  "Read them all here"
  }
  },{
    title: "Nonsense comics",
    image: nonsense.src,
    imageDescription: "The cover of Nonesense Comics",
    description: "I draw a lot of comics about random things, silly things, relatable things, and if they don't fall into a specific theme they end up as a nonesense comic.",
    link: {
      href: "https://tapas.io/series/pipers-Nonsense-Comics/info",
      linkText:  "Read them all here"
  }
  },
]

export const graphicNovelData: graphicNovelDataTypes[] = [
  {
    title: "In Pursuit of Magic",
    image: pursuitMagic.src,
    imageDescription: "The cover of In Pursuit of Magic, written and illustrated by Piper Strange.",
    description: "A short illustrated story about a bear and a bunny searching for magic. Written for my girlfriend because I am made of cheese.",
    link: {
      href: "https://tapas.io/series/In-Pursuit-of-Magic/info",
      linkText:  "Read the story here"
  }
  },

  {
    title: "SCIENCE RATS",
    image: scienceRats.src,
    imageDescription: "The cover of SCIENCE RATS, written and illustrated by Piper Strange.",
    description: "A short story about rats doing science! I love science and I love rats and the combination makes a ridiculous comic.",
    link: {
      href: "https://tapas.io/series/science-rats/info",
      linkText:  "Read the story here"
  }
  },

  {
    title: "By Any Other Name",
    image: nameComic.src,
    imageDescription: "The cover of By Any Other Name, written and illustrated by Piper Strange.",
    description: "An autobiographical comic about my name change.",
    link: {
      href: "https://tapas.io/series/By-Any-Other-Name-comic/info",
      linkText:  "Read it here"
  }
  },

  {
    title: "Misusing the Imagination",
    image: worryComic.src,
    imageDescription: "The cover of Misusing the Imagination, written and illustrated by Piper Strange.",
    description: "An autobiographical comic written during the aftermath of an abusive relationship. Contains themes of suicide, domestic violence, and trauma. ",
    link: {
      href: "https://tapas.io/series/Worry-is-a-Misuse-of-the-Imagination/info",
      linkText:  "Read it here"
  }
  },

    {
      title: "Life is Beautiful",
      image: lib.src,
      imageDescription: "The cover of Life is Beautiful, written and illustrated by Piper Strange.",
      description: "What happens when Piper has an enormous irrational fear of zombies, you ask? They write and illustrate a comic about them. A very different take on the traditional zombie tale, instead it focusses on Mergle, a zombie who has some questions about the nature of existance now the world has well and truly ended, and finds an incredible discovery while meandering around the city. A story about life, and meaning, and standing up for what you love.",
      link: {
        href: "https://tapas.io/series/Life-is-Beautiful/info",
        linkText:  "Read the story so far..."
    }
    },

    {
      title: "Space Bunnies in Space",
      image: spaceBunnies.src,
      imageDescription: "The cover of Space Bunnies in Space, written by Felicity J. M. Cullen and illustrated by Piper Strange.",
      description: "A science fiction graphic novel project, written by my partner Felicity and illustrated myself. This is currently going through a re-write (which also probably means a re-illustrate) so what currently exists will possibly change.",
      link: {
        href: "https://tapas.io/series/Space-Bunnies-in-Space/info",
        linkText:  "Read the first chapter"
    }
    },

    {
      title: "Powerpuff Girls VS The Goddamn Batman",
      image: ppgvsbm.src,
      imageDescription: "The cover of Powerpuff Girls VS The Goddamn Batman, written and illustrated by Piper Strange.",
      description: "The first graphic novel style comic I ever did, as a part of a 50 page comic challenge. It's a bit scribbly but the story is fun and I enjoyed creating it a lot!",
      link: {
        href: "https://tapas.io/series/Powerpuff-Girls-VS-The-Goddamn-Batman/info",
        linkText:  "Read the whole thing here"
    }
    },
]
