import React from "react";
import { Link } from "react-router-dom";
import ProviderFormulario from "../../context/contextoFormulario";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de Atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu pokémon
        </p>
        <div className="corpo-formulario">
          <ProviderFormulario>
            <div className="inputs">
              <div>
                <p className="nome-secao">
                  <img src={treinador} alt="treinador" />
                  <span>Treinador</span>
                </p>
                <Input name="nome" label="Nome" />
                <Input name="apelido" label="Apelido" />
                <Input name="email" label="Email" type="email" />
              </div>
              <div>
                <p className="nome-secao">
                  <img src={pikachu} alt="pikachu" />
                  <span>Pokémon</span>
                </p>
                <Input name="nomePokemon" label="Nome" />
              </div>
            </div>
            <Detalhe />
          </ProviderFormulario>
        </div>
      </div>
    </>
  );
};

export default Formulario;
