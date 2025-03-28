import React, { useEffect, useState } from 'react'
import CardProduto from '../Components/CardProduto'
import axios from 'axios';
import './Feira.css'

export default function Feira() {
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/products')
    .then(response => setProdutos(response.data))
  }, []);

  
  return (
    <div >
        <div className="listaProdutos">
            {produtos.length === 0 ?
            (<p>Carregando produtos</p>):
            produtos.map(produto => 
              <CardProduto
                key={produto.id}
                img={produto.image}
                nome={produto.name}
                preco={produto.price}          
              />)}
        </div>

    </div>
  )
}