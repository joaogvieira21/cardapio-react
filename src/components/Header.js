import React from 'react'
import { useState } from 'react'
import salada from '../assets/img/salada.webp'
import frutos from '../assets/img/frutos.webp'
import carnes from '../assets/img/carnes.webp'
import massas from '../assets/img/massas.webp'
import petiscos from '../assets/img/petiscos.webp'
import sobremesas from '../assets/img/sobremesas.webp'
import lanches from '../assets/img/lanches.webp'
import bebidas from '../assets/img/bebidas.webp'
import logo from '../assets/img/logo.webp'
import './Header.css'


const Header = () => {
  const [clicked, setClicked] = useState(false)
  function seeMoreHandler () {
    if (clicked==false){
      setClicked(true)
    }
    else if (clicked==true){
      setClicked(false)
    }
  }
  return (
   
    
    <div className="header">
      <div class="bg-color">
        <nav>
          <NavBar items={["Saladas", "Frutos do Mar", "Carnes e Aves", "Massas e Molhos", "Petiscos", "Sobremesas", "Lanches", "Bebidas"]}/>
        </nav>
        <div className="half-header">
        </div>
        <div className="end-header">
        </div>
        <div className="logo-description">
          <div class="container-logo">
              <img src={logo}></img>
          </div>
          <h1>Rosaritos Congelados</h1>
          <span>Aqui é <strong>FIT</strong> de verdade!</span>
          <button className="btn-see-more" onClick={seeMoreHandler}>Ver mais</button>
        </div>
        {clicked==false && (
        <div className="adress-social ">
          <div className="social scale-up-hor-left">
            <Social socialbar={["Instagram", "Facebook", "Whatsapp", "Ligar"]}/>
          </div>
          <div className="adress scale-up-ver-top">
            <span><strong>Endereço:</strong> Rua Honória Virgilina Machado </span>
            <span><strong>Horário de Entrega:</strong> Terças das 00:00 às 00:00 </span>
            <span><strong>Telefone:</strong> 48 984175514 </span>
            <span><strong>Whatsapp:</strong> 48 984175514 </span>
          </div>
        </div>)
        }
        <main>
          <h2>Cardápio</h2>
          <div className="food-menu">
            <Button food="Saladas" type="salad" clickFood={false}/>
            <Button food="Frutos do Mar" type="frutos"/>
            <Button food="Carnes e Aves" type="carnes-aves"/>
            <Button food="Massar e Molhos" type="massas"/>
            <Button food="Petiscos" type="petiscos"/>
            <Button food="Sobremesas" type="sobremesas"/>
            <Button food="Lanches" type="lanches"/>
            <Button food="Bebidas" type="bebidas"/>
          </div>
        </main>
      </div>
    </div>
  
  )
}


const Social = (props) => {
  return (
    <ul className="menu-social">
        {props.socialbar.map((socialItem) =>
            <li>{socialItem}</li>
        )}
    </ul>
  )
}

const NavBar = (props) => {
  return (
    <ul className="menu-header">
        {props.items.map((item) =>
            <li class="menu-item">{item}</li>
        )}
    </ul>
  )
}

const Button = (props) => {
  const [clicked, setClicked] = useState(false)
  function foodShowHandler () {
    if (clicked==false){
      setClicked(true)
    }
    else if (clicked==true){
      setClicked(false)
    }
  }
  return (
    <div>
      <button onClick={foodShowHandler}><span>{props.food}</span>
      </button>
      {props.type=="salad" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="Salada Mista" description="Salada mista fresquinha blablabla" value="R$ 12,00" img={salada}/>
          <DisplayFood dish="Salada de Camarão" description="Salada de camarão fresco blablabla" value="R$ 30,00" img={salada} type="salad"/>
          <DisplayFood dish="Salada Caesar" description="A melhor salada da casa do caralho" value="R$ 18,00" img={salada} type="salad"/>
       </div>
      )}
      {props.type=="frutos" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="Salmão Grelhado" description="Acompanha purê de manga e nubu salada com frutas" value="R$ 58,00" img={frutos}/>
          <DisplayFood dish="Anchova Grelhada" description="Acompanha arroz branco com pirão de camaerão" value="R$ 30,00" img={frutos}/>
        </div>
      )}
      {props.type=="carnes-aves" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="Frango à Italiana" description="Acompanha massa ao molho sugo, rúcula e frango grlhado" value="R$ 30,00" img={carnes}/>
          <DisplayFood dish="Frango Grelhado" description="Acompanha salada mista e legumes na manteiga" value="R$ 33,00" img={carnes}/>
          <DisplayFood dish="Frango à Italiana" description="Acompanha arroz, feijão e fritas" value="R$ 48,00" img={carnes}/>
          <DisplayFood dish="Filet Piamontese" description="Acompanha nhoque, queijo, tomate cereja, bacon e molho piamontese" value="R$ 48,00" img={carnes}/>
        </div>
      )}
      {props.type=="massas" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="Sugo, bolonhesa, Espaguetti ou Penne" description="Massa boa pra cacete bota fé" value="R$ 25,00" img={massas}/>
          <DisplayFood dish="Quatro Queijos" description="Massa boa pra cacete bota fé" value="R$ 30,00" img={massas}/>
        </div>
      )}
      {props.type=="petiscos" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="Calabresa Acebolada" description="400gr" value="R$ 18,00" img={petiscos}/>
          <DisplayFood dish="Iscas de Frango" description="400gr" value="R$ 25,00" img={petiscos}/>
          <DisplayFood dish="Ostra Gratinada" description="6 unidades" value="R$ 26,00" img={petiscos}/>
        </div>
      )}
      {props.type=="sobremesas" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="Mousse de Limão" description="Mussezinho gosto parça" value="R$ 8,00" img={sobremesas}/>
          <DisplayFood dish="Petit Gateaut" description="Com sorvete de creme" value="R$ 15,00" img={sobremesas}/>
        </div>
      )}
      {props.type=="lanches" && clicked==true && (
        <div class="food-container scale-up-tl">
          <DisplayFood dish="X-Salada" description="Acompanha 100g de fritas" value="R$ 21,00" img={lanches}/>
          <DisplayFood dish="X-Bacon" description="Acompanha 100g de fritas" value="R$ 22,00" img={lanches}/>
        </div>
      )}
      {props.type=="bebidas" && clicked==true && (
        <div class="food-container scale-up-tl">
           <DisplayFood dish="Água" description="500ml" value="R$ 3,00" img={bebidas}/>
           <DisplayFood dish="Cerveja Heineken" description="Longneck" value="R$ 10,00" img={bebidas}/>
        </div>
      )}

    </div>
    
  )
}

const DisplayFood = (props) => {
  return (
    <div className="food">
      <img className="menu-img"src={props.img}></img>
      <div className="food-description">
        <span>{props.dish}</span>
        <span>{props.description}</span>
        <span>{props.value}</span>
      </div>
    </div>
  )
}


export default Header;
