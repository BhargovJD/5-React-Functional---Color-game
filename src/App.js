import React from 'react'
import Square from './components/Square'
import Input from './components/Input'

import { useState } from 'react'


export default function App() {

  const [colorValue, setColorValue]=useState('')

  return (
    <div>

      <Square colorValue={colorValue}/>

      <Input colorValue={colorValue} setColorValue={setColorValue}/>

    </div>
  )
}
