import Header from "./component/Header"
import Products from "./component/Products"
import Card from "./component/Card"
import { useState } from "react"
function App() {
  const[card,setCard]=useState([]);
return (
    <div className="container mx-auto p-4">
     <Header card={card}/>
     <Products card={card} setCard={setCard}/>
     <Card card={card} setCard={setCard}/>
    </div>
  )
}

export default App
