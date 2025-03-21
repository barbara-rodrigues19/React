import { useState } from 'react'
import './App.css'
import Musica from './components/musica/Musica'

function App() {

 const [musicas, setMusicas] = useState ([]
 
 )

 const pegarUmaMusica = () => {
axios.get ('http://localhost:3000/musica').then(response => {
  setMusicas(response.data)

  musicas.forEach(musica => console.log(musica))
})
 }
  
 return (
  <div>
    {/* Se tiver músicas, renderiza uma lista de componentes Musica */}
    {musicas.length > 0 ? (
      musicas.map((musica) => (
        <Musica key={musica.id} dados={musica} />  // Passa cada música para o componente Musica
      ))
    ) : (
      <p>Não há músicas disponíveis.</p>  // Exibe uma mensagem caso a lista esteja vazia
    )}

    <button onClick={pegarMusicas}>Pegar músicas</button>
  </div>
);
}

export default App
