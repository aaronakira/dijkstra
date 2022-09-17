import React, { useState, useEffect } from 'react'


type Props = {
    name: string;
    age: number;
}




const Item: React.FC<Props> = ({name, age}) => {
 
  return (
    <div className="App">
      {name} | {age}
      
    </div>
  )
}

export default Item;