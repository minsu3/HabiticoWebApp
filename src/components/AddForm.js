import React, { useState } from 'react'
import Form from "react-bootstrap/Form";

function AddForm({ addHabit }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addHabit(value);
    setValue("")
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            className="input"
            placeholder="Enter todos here..."
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddForm