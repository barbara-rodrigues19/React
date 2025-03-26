import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardAnimal from './Components/Animal/CardAnimal'

const animais = [
  {
    id:'1',
    specie: 'Orca',
    taxonomy: 'Orcinus orca', 
    image: "https://www.ufrgs.br/faunadigitalrs/wp-content/uploads/2019/06/Orcinus-orca.jpg"
  },
  {
    id: '2',
    specie: "Leao",
    taxonomy:'Panthera leo',
    image: "https://s4.static.brasilescola.uol.com.br/be/2021/04/casal-de-leoes.jpg"
  }

]


function App() {
  const [count, setCount] = useState(0)
let specie = 'Orca'
let taxonomia = 'Orcinus orca'

  return (
    <>
     <div className="container">

     <CardAnimal 
     specie={animais[0].specie}
     taxonomy={animais[0].taxonomy}
     img={animais[0].image}
     />
<br/>
     <CardAnimal 
     specie ={animais[1].specie}
     taxonomy={animais[1].taxonomy}
     img={animais[1].image} />
     
      </div>
    </>
  )
}

export default App
