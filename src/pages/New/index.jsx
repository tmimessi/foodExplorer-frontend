import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { TextArea } from "../../components/TextArea"
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem"
import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Content, ButtonBack, Form, InputWrapper, SectionIngredients } from "./styles";

export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("");
  };

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  async function handleNewDish() {
    if (!imgFile) {
      return alert("Adicione uma imagem para o prato")
    }

    if (!title) {
      return alert("Adicione um título para o prato")
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato")
    }

    if (!price) {
      return alert("Adicione um preço para o prato")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique ou deixe o campo vazio.")
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente")
    }

    const formData = new FormData();
    formData.append("img", imgFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api.post("/dishes", formData);
    alert("Prato cadastrado com sucesso!");
    navigate("/")

  }

  return (
    <Container>
      <Header />
        <Content>
          <ButtonBack>
            <Link to="/"><FiChevronLeft size={30}/>Voltar</Link>
          </ButtonBack>

           <Form>
            <header>
              <legend>Criar prato</legend>
            </header>

            <InputWrapper>
              <div className="smallBox">
              <label id="file" htmlFor="image">
                  Imagem do prato
                  <div>
                    <FiUpload size={24}/>
                    <span>Selecione a imagem</span>
                    <input 
                      id="image" 
                      type="file"
                      onChange={e => setImgFile(e.target.files[0])}
                    />
                  </div>
                </label>
              </div>

              <Input
              label="name" 
              title="Nome do prato" 
              type="text" 
              placeholder="Ex.: Salada Caesar"
              onChange={e => setTitle(e.target.value)}
              />
            </InputWrapper>

             <InputWrapper>
              <SectionIngredients>
                <span>Ingredientes</span>
                <div>
                {
                    ingredients.map((ingredient, index) => (
                  <IngredientItem
                  key={String(index)} 
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)} 
                  />
                  ))
                }
                  <IngredientItem 
                    isNew 
                    value={newIngredient}
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </SectionIngredients>

              <div className="smallBox">
                <Input
                  label="price" 
                  title="Preço" 
                  type="text" 
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>

            <TextArea 
              label="Description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />

            <button 
            type="button" 
            onClick={handleNewDish}>
            Adicionar pedido
            </button>
          </Form>

        </Content>
      
      <Footer />

    </Container>
  )
}