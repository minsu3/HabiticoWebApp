import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { addHabit }  from "./HabitService";
import Button from "react-bootstrap/Button";

function Insert() {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return;
    addHabit(value);
    setValue("");
  }

  return (
    <div className="main-quit">
      <h2 className="insert-title">What are you trying to quit?</h2>
      <div className="quit-list">
        <Form>
          <Form.Group>
            <Form.Label style={{ fontWeight: "600" }}>I will quit:</Form.Label>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              style={{ position: "relative", top: "15px", margin: "5px" }}
              href={"/quit"}
            >
              Cancel
            </Button>
            <Button style={{ position: "relative", top: "15px" }} >
              Next
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Insert