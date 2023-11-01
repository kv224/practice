import React, { useState } from 'react';
import { Button } from 'reactstrap';


function Wild() {

  const [superman , setsuperman] = useState(15)

  const addValue = () =>{
    setsuperman(superman+1)
  }

  return (
    <div>
      <h1>hooks counter value: {superman}</h1>
      <Button onClick={addValue} color="danger">Add!</Button>
      <br/>
      <br/>
      <br/>
      <Button color="danger">Remove</Button>
    </div>
  );
}

export default Wild;