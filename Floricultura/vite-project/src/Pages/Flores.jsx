import React from 'react';
import CardFloricultura from './CardFloricultura';


const flores = [
    {
        nome: 'Rosa Vermelha',
        descricao: 'Uma rosa vermelha clássica e perfumada.',
        imagem: 'https://via.placeholder.com/250/FF0000/FFFFFF?text=Rosa+Vermelha',
        preco: 29.90,
    },
    {
        nome: 'Girassol',
        descricao: 'Girassol amarelo vibrante, perfeito para iluminar qualquer ambiente.',
        imagem: 'https://via.placeholder.com/250/FFFF00/000000?text=Girassol',
        preco: 19.50,
    },
    {
        nome: 'Orquídea',
        descricao: 'Orquídea exótica e elegante, trazendo um toque sofisticado.',
        imagem: 'https://via.placeholder.com/250/800080/FFFFFF?text=Orquídea',
        preco: 49.90,
    },
    {
        nome: 'Tulipa',
        descricao: 'Tulipas coloridas que vão deixar qualquer ambiente mais alegre.',
        imagem: 'https://via.placeholder.com/250/FF6347/FFFFFF?text=Tulipa',
        preco: 25.30,
    },
];


const Flores = () => {
    return (
      <div className="floricultura">
        {flores.map((flor, index) => (
          <Card key={index} flor={flor} />  {/* Passa as informações de cada flor para o Card */}
        ))}
      </div>
    );
  };
  
  export default Flores;

export default Flores;

