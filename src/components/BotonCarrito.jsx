import { useState } from 'react'


export default function BotonCarrito() {

  const [contador, setContador] = useState(0)

  return (
    <div style={{textAlign:"center",marginTop:"20px"}} >
      <h2>Contador: {contador} </h2>
      <button onClick={()=>setContador(contador+1)} ></button>
      <button onClick={()=>setContador(contador-1)}></button>
    </div>
  )
}
