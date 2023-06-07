import ItemListContainer from "./componentes/itemListContainer/itemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = {"Aprovechá 3 y 6 cuotas sin interés!!"}/>
    </div>
    
  )
}

export default App

//Repasito:

//1) Renderizar un único elemento
//2) Pueden pasar props de un componente padre a un hijo