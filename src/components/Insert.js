import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Insert() {
  const [value, setValue] = useState("")

  
  return (
    <div className="app">
      <h2 className="title">What are you trying to quit?</h2>
      <div className="quit-list">
        <Form.Group>
          <Form.Label style={{fontWeight: "600"}}>I will quit:</Form.Label>
            <Form.Control 
              value={value}
            />
          <Button style={{position: "relative", top: "15px"}} to="/insert/time">Next</Button>
        </Form.Group>
      </div>
    </div>
  );
}

export default Insert