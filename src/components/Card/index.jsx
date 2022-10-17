import { Container } from "./styles"

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight} from 'react-icons/fa'

import { Button } from "../Button";

import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';

export function Card({dish}) {
  const dishImage = `${api.defaults.baseURL}/files/${dish.img}`

  const navigate = useNavigate()
  function handleDetails() {
    navigate(`/details/${dish.id}`);
  }

  return (
    <Container>
        <div className="food-image">
          <img src={dishImage} />
        </div>

        <a type="button" onClick={handleDetails}>
         <h3>{dish.title} <FaAngleRight/></h3> 
        </a>

        <p>
          {dish.description}
        </p>

        <strong>R$ {dish.price}</strong>

        <div className="stepper-btn">
          <button className="btn"> <FiMinus size={25} /> </button>
          
          <span>01</span>
          
          <button className="btn"> <FiPlus size={25} /></button>

          <Button
            title="incluir"
          />
          
        </div>

    </Container>
  )
}