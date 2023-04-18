import Header from "./component/Header"
import Products from "./component/Products"
import Card from "./component/Card"
import { useState } from "react"
function App() {

return (
    <div className="container mx-auto p-4">
     <Header />
     <Products/>
     <Card/>
    </div>
  )
}

export default App
