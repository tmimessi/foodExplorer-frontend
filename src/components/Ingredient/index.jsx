import { Container } from './styles';

import lettuce from '../../assets/alface.png';
import plum from '../../assets/ameixa.png';
import almonds from '../../assets/amendoas.png';
import anise from '../../assets/anis.png';
import coffee from '../../assets/cafe.png';
import shrimp from '../../assets/camarao.png';
import cinnamon from '../../assets/canela.png';
import damascus from '../../assets/damasco.png';
import flour from '../../assets/farinha.png';
import lemon from '../../assets/limao.png';
import apple from '../../assets/maca.png';
import passionFruit from '../../assets/maracuja.png';
import pasta from '../../assets/massa.png';
import egg from '../../assets/ovo.png';
import bread from '../../assets/pao.png';
import naanBread from '../../assets/pao-naan.png';
import cucumber from '../../assets/pepino.png';
import peach from '../../assets/pessego.png';
import pesto from '../../assets/pesto.png';
import ham from '../../assets/presunto.png';
import radish from '../../assets/rabanete.png';
import tomato from '../../assets/tomate.png';
import arugula from '../../assets/rucula.png';
import whiskey from '../../assets/whiskey.png';

export function Ingredient({ingredient}) {

  function fetchImageIngredient(name) {
    let ingredient = name
    
    let result;
    
    if (ingredient == "alface") {
      return result = lettuce
    } else if (ingredient == "tomate") {
      return result = tomato
    } else if (ingredient == "rabanete") {
      return result = radish
    } else if (ingredient == "pão naan") {
      return result = naanBread
    } else if (ingredient == "pão") {
      return result = bread
    } else if (ingredient == "presunto") {
      return result = ham
    } else if (ingredient == "rúcula") {
      return result = arugula
    } else if (ingredient == "camarão") {
      return result = shrimp
    } else if (ingredient == "massa") {
      return result = pasta
    } else if (ingredient == "pesto") {
      return result = pesto
    } else if (ingredient == "pepino") {
      return result = cucumber
    } else if (ingredient == "ameixa") {
      return result = plum
    } else if (ingredient == "farinha") {
      return result = flour
    } else if (ingredient == "pêssego") {
      return result = peach
    } else if (ingredient == "amêndoas") {
      return result = almonds
    } else if (ingredient == "ovo") {
      return result = egg
    } else if (ingredient == "damasco") {
      return result = damascus
    } else if (ingredient == "maracujá") {
      return result = passionFruit
    } else if (ingredient == "café") {
      return result = coffee
    } else if (ingredient == "canela") {
      return result = cinnamon
    } else if (ingredient == "anis") {
      return result = anise                
    } else if (ingredient == "limão") {
      return result = lemon
    } else if (ingredient == "whiskey") {
      return result = whiskey
    } else if (ingredient == "maçã") {
      return result = apple
    } else {
      return result = egg
    }
  }

  let result = fetchImageIngredient(ingredient)

  return (
    <Container>
      <img src={result} alt="" />
      <span className="ingredient-name">{ingredient}</span> 
    </Container>
  )
}