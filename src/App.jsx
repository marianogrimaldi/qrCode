
import { useState } from 'react';
import './App.css'
import QRCode from "react-qr-code";

function App() {
  
  const [text, setText] = useState ("")
  function handleChange(e){
    setText(e.target.value)

  }
  return (
    <div>
      <h1>GENERADOR DE CODIGO QR</h1>
      <QRCode value={text} />
      <div className='imput'>
          <p>Ingrese los datos</p>
          <input type="text" value={text} onChange={(e) => {handleChange(e)}} />
      </div>
    </div>
  )
}

export default App
