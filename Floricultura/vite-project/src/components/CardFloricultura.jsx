import React from 'react';
import './Card.css'; // Vamos adicionar estilos para o card

// Componente Card que recebe 'flor' como propriedade
const Card = ({ flor }) => {
  return (
    <div className="card">
      {/* A imagem da flor */}
      <img src={flor.imagem} alt={flor.nome} className="card__imagem" />

      {/* O conteúdo do card */}
      <div className="card__conteudo">
        {/* Nome da flor */}
        <h3 className="card__nome">{flor.nome}</h3>

        {/* Descrição da flor */}
        <p className="card__descricao">{flor.descricao}</p>

        {/* Preço da flor */}
        <p className="card__preco">R${flor.preco.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;