import { useState, useEffect } from 'react'
import Item from "./components/item";


const items = [
  {name: "Axel", age: 9},
  {name: "Jin", age: 123123}
]

const App = () => {
  const [foo, setFoo] = useState(0);

  useEffect(() => {
    setFoo(1);

  }, [])


  return (
    <div className="App">
      
      {
        items.map((shit) => <Item name={shit.name} age={shit.age}/>)
      }

      
    </div>
  )
}

export default App;
