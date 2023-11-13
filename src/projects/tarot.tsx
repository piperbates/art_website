import fool from '@/images/illustrations/tarot/the-fool.png';
import magician from '@/images/illustrations/tarot/the-magician.png';
import highPriestess from '@/images/illustrations/tarot/the-high-priestess.png';
import empress from '@/images/illustrations/tarot/the-empress.png';
import emperor from '@/images/illustrations/tarot/the-emperor.png';
import hierophant from '@/images/illustrations/tarot/the-hierophant.png';
import lovers from '@/images/illustrations/tarot/the-lovers.png';
import justice from '@/images/illustrations/tarot/justice.png';
import chariot from '@/images/illustrations/tarot/the-chariot.png';
import hermit from '@/images/illustrations/tarot/the-hermit.png'
import wheel from '@/images/illustrations/tarot/the-wheel-of-fortune.png';
import strength from '@/images/illustrations/tarot/strength.png';
import hangedMan from '@/images/illustrations/tarot/the-hanged-man.png';
import death from '@/images/illustrations/tarot/death.png';
import temperance from '@/images/illustrations/tarot/temperance.png';
import devil from '@/images/illustrations/tarot/the-devil.png';
import tower from '@/images/illustrations/tarot/the-tower.png';
import star from '@/images/illustrations/tarot/the-star.png';
import moon from '@/images/illustrations/tarot/the-moon.png';
import sun from '@/images/illustrations/tarot/the-sun.png';
import judgement from '@/images/illustrations/tarot/judgement.png';
import world from '@/images/illustrations/tarot/the-world.png';



interface tarotCardsTypes {
    name: string,
    number: number,
    image: string,
  }
  

const tarotCards: tarotCardsTypes[] = [
    {
        name: "The Fool",
        number: 0,
        image: fool.src
    },
    {
        name: "The Magician",
        number: 1,
        image: magician.src
    },
    {
        name: "The High Priestess",
        number: 2,
        image: highPriestess.src
    },
    {
        name: "The Empress",
        number: 3,
        image: empress.src
    },
    {
        name: "The Emperor",
        number: 4,
        image: emperor.src
    },
    {
        name: "The Hierophant",
        number: 5,
        image: hierophant.src
    },
    {
        name: "The Lovers",
        number: 6,
        image: lovers.src
    },
    {
        name: "The Chariot",
        number: 7,
        image: chariot.src
    },
    {
        name: "Justice",
        number: 8,
        image: justice.src
    },
    {
        name: "The Hermit",
        number: 9,
        image: hermit.src
    },
    {
        name: "The Wheel of Fortune",
        number: 10,
        image: wheel.src
    },
    {
        name: "Strength",
        number: 11,
        image: strength.src
    },
    {
        name: "The Hanged Man",
        number: 12,
        image: hangedMan.src
    },
    {
        name: "Death",
        number: 13,
        image: death.src
    },
    {
        name: "Temperance",
        number: 14,
        image: temperance.src
    },
    {
        name: "The Devil",
        number: 15,
        image: devil.src
    },
    {
        name: "The Tower",
        number: 16,
        image: tower.src
    },
    {
        name: "The Star",
        number: 17,
        image: star.src
    },
    {
        name: "The Moon",
        number: 18,
        image: moon.src
    }
    ,
    {
        name: "The Sun",
        number: 19,
        image: sun.src
    },
    {
        name: "Judgement",
        number: 20,
        image: judgement.src
    },
    {
        name: "The World",
        number: 21,
        image: world.src
    }
]

export default tarotCards