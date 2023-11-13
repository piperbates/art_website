import tarot from '@/images/illustrations/tarot-cards.png';
import lgbtDinos from '@/images/illustrations/lgbt-dinos.png';
import angel from '@/images/illustrations/angel.png';
import bard from '@/images/illustrations/bard.jpg';
import bearBath from '@/images/illustrations/bear-bath.jpg';
import colourful from '@/images/illustrations/colourful.jpg';
import dragon from '@/images/illustrations/dragon.jpg';
import elephant from '@/images/illustrations/elephant.jpg';
import fliss from '@/images/illustrations/fliss.jpg';
import icecream from '@/images/illustrations/icecream.jpg';
import ori from '@/images/illustrations/ori.jpg';
import joy from '@/images/illustrations/joy.jpg';
import trans from '@/images/illustrations/trans.jpg';
import treasure from '@/images/illustrations/treasure.jpg';
import wingedFox from '@/images/illustrations/winged_fox.jpg';
import memories from '@/images/illustrations/memories.png';



interface artDataTypes {
  image: String,
  imageDescription: String,
}

const artData: artDataTypes[] = [
  {
    image: memories.src,
    imageDescription: "An illustration of a fox wandering through the snow. Text above says 'Memories are the gifts they leave behind for you to keep.'",
  },
  {
    image: tarot.src,
    imageDescription: "A series of illustrations of tarot cards",
  },
  {
    image: colourful.src,
    imageDescription: "An illustration of a colourfully dressed woman",
  },
  {
    image: treasure.src,
    imageDescription: "An illustration of a bunch of rats digging up a treasure chest full of gold",
  },
  {
    image: trans.src,
    imageDescription: "An illustration of a woman standing beside some text that says 'Trans is beautiful'",
  },
  {
    image: joy.src,
    imageDescription: "An illustration of two trans people looking happy",
  },
  {
    image: ori.src,
    imageDescription: "An illustration of a blue parrot in the rainforest",
  },
  {
    image: wingedFox.src,
    imageDescription: "An illustration of a fox creature with wings",
  },
  {
    image: icecream.src,
    imageDescription: "An illustration of a rat in an ice cream cone",
  },
  {
    image: fliss.src,
    imageDescription: "An illustration of a woman dressed in a gothic outfit",
  },
  {
    image: elephant.src,
    imageDescription: "An illustration of an elephant painted in tie dye colours",
  },
  {
    image: dragon.src,
    imageDescription: "An illustration of a blue dragon flying through the sky",
  },
  {
    image: bearBath.src,
    imageDescription: "An illustration of a bear having a bath",
  },
  {
    image: bard.src,
    imageDescription: "An illustration of a bard from a dnd campaign",
  },
  {
    image: lgbtDinos.src,
    imageDescription: "A collection of dinosaurs in a variety of LGBT flag colours",
  },
  {
    image: angel.src,
    imageDescription: "A digital painting of an angel",
  },
]

  export default artData