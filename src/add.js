import React, { useState } from 'react'
import { Button } from 'reactstrap';

 function Add() {

  const [my,setmy] = useState(10)
  const add = ()=>{
    if (my<20){
      setmy(my+1)
    }
    else{
      setmy(20)
    }
  }
  const minus = ()=>{
    if (my>1){
      setmy(my-1)
    }
    else{
      setmy(0)
    }
  }
  return (
    <div>
        <Button onClick={add}>add </Button> 
        <Button onClick={minus}>add </Button> 

        <h1>{my}</h1>     
    </div>
  )
}

export default Add;