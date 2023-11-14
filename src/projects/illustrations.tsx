import angel from '../images/illustrations/angel.png';
import bard from '../images/illustrations/bard.jpg';
import bearBath from '../images/illustrations/bear-bath.jpg';
import colourful from '../images/illustrations/colourful.jpg';
import dragon from '../images/illustrations/dragon.jpg';
import elephant from '../images/illustrations/elephant.jpg';
import fliss from '../images/illustrations/fliss.jpg';
import icecream from '../images/illustrations/icecream.jpg';
import ori from '../images/illustrations/ori.jpg';
import joy from '../images/illustrations/joy.jpg';
import trans from '../images/illustrations/trans.jpg';
import treasure from '../images/illustrations/treasure.jpg';
import wingedFox from '../images/illustrations/winged_fox.jpg';
import memories from '../images/illustrations/memories.png';
import fool from '../images/illustrations/tarot/the-fool.png';
import magician from '../images/illustrations/tarot/the-magician.png';
import highPriestess from '../images/illustrations/tarot/the-high-priestess.png';
import empress from '../images/illustrations/tarot/the-empress.png';
import emperor from '../images/illustrations/tarot/the-emperor.png';
import hierophant from '../images/illustrations/tarot/the-hierophant.png';
import lovers from '../images/illustrations/tarot/the-lovers.png';
import justice from '../images/illustrations/tarot/justice.png';
import chariot from '../images/illustrations/tarot/the-chariot.png';
import hermit from '../images/illustrations/tarot/the-hermit.png';
import wheel from '../images/illustrations/tarot/the-wheel-of-fortune.png';
import strength from '../images/illustrations/tarot/strength.png';
import hangedMan from '../images/illustrations/tarot/the-hanged-man.png';
import death from '../images/illustrations/tarot/death.png';
import temperance from '../images/illustrations/tarot/temperance.png';
import devil from '../images/illustrations/tarot/the-devil.png';
import tower from '../images/illustrations/tarot/the-tower.png';
import star from '../images/illustrations/tarot/the-star.png';
import moon from '../images/illustrations/tarot/the-moon.png';
import sun from '../images/illustrations/tarot/the-sun.png';
import judgement from '../images/illustrations/tarot/judgement.png';
import world from '../images/illustrations/tarot/the-world.png';

export interface artDataTypes {
  image: string,
  imageDescription: string,
}

export const artData: artDataTypes[] = [
  {
    image: memories.src,
    imageDescription: "An illustration of a fox wandering through the snow. Text above says 'Memories are the gifts they leave behind for you to keep.'",
  },
  {
    image: colourful.src,
    imageDescription: 'An illustration of a colourfully dressed woman',
  },
  {
    image: treasure.src,
    imageDescription: 'An illustration of a bunch of rats digging up a treasure chest full of gold',
  },
  {
    image: trans.src,
    imageDescription: "An illustration of a woman standing beside some text that says 'Trans is beautiful'",
  },
  {
    image: joy.src,
    imageDescription: 'An illustration of two trans people looking happy',
  },
  {
    image: ori.src,
    imageDescription: 'An illustration of a blue parrot in the rainforest',
  },
  {
    image: wingedFox.src,
    imageDescription: 'An illustration of a fox creature with wings',
  },
  {
    image: icecream.src,
    imageDescription: 'An illustration of a rat in an ice cream cone',
  },
  {
    image: fliss.src,
    imageDescription: 'An illustration of a woman dressed in a gothic outfit',
  },
  {
    image: elephant.src,
    imageDescription: 'An illustration of an elephant painted in tie dye colours',
  },
  {
    image: dragon.src,
    imageDescription: 'An illustration of a blue dragon flying through the sky',
  },
  {
    image: bearBath.src,
    imageDescription: 'An illustration of a bear having a bath',
  },
  {
    image: bard.src,
    imageDescription: 'An illustration of a bard from a dnd campaign',
  },
  {
    image: angel.src,
    imageDescription: 'A digital painting of an angel',
  },
];

export const tarotCards: artDataTypes[] = [
  {
    image: fool.src,
    imageDescription: 'The Fool Tarot Card',
  },
  {
    image: magician.src,
    imageDescription: 'The Magician Tarot Card',

  },
  {
    image: highPriestess.src,
    imageDescription: 'The High Priestess Tarot Card',
  },
  {
    image: empress.src,
    imageDescription: 'The Empress Tarot Card',
  },
  {
    image: emperor.src,
    imageDescription: 'The Emperor Tarot Card',
  },
  {
    image: hierophant.src,
    imageDescription: 'The Hierophant Tarot Card',
  },
  {
    image: lovers.src,
    imageDescription: 'The Lovers Tarot Card',
  },
  {
    image: chariot.src,
    imageDescription: 'The Chariot Tarot Card',
  },
  {
    image: justice.src,
    imageDescription: 'Justice Tarot Card',
  },
  {
    image: hermit.src,
    imageDescription: 'The Hermit Tarot Card',
  },
  {
    image: wheel.src,
    imageDescription: 'The Wheel of Fortune',
  },
  {
    image: strength.src,
    imageDescription: 'Strength Tarot Card',
  },
  {
    image: hangedMan.src,
    imageDescription: 'The Hanged Man Tarot Card',
  },
  {
    image: death.src,
    imageDescription: 'Death Tarot Card',
  },
  {
    image: temperance.src,
    imageDescription: 'Temperance Tarot Card',
  },
  {
    image: devil.src,
    imageDescription: 'The Devil Tarot Card',
  },
  {
    image: tower.src,
    imageDescription: 'The Tower Tarot Card',
  },
  {
    image: star.src,
    imageDescription: 'The Star Tarot Card',
  },
  {
    image: moon.src,
    imageDescription: 'The Moon Tarot Card',
  },
  {
    image: sun.src,
    imageDescription: 'The Sun Tarot Card',
  },
  {
    image: judgement.src,
    imageDescription: 'Judgement Tarot Card',
  },
  {
    image: world.src,
    imageDescription: 'The World Tarot Card',
  },
];
