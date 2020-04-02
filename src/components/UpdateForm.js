import React, { useState } from 'react'
import Button from "react-bootstrap/Button";

function UpdateForm({ id, text, index, updateHabit }) {
  const [formState, setFormState] = useState(
    { 
      display: "none",
      formValue: ""
    }
  )

  const toggleBodyForm = event => {
    event.preventDefault();
    formState.display === "block"
      ? setFormState({ display: "none", formValue: "" })
      : setFormState({ display: "block", formValue: "" });
  }

  const onChange = (event) => {
    setFormState({display: "block", formValue: event.target.value })
    console.log(formState)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    text = formState.formValue
    console.log(formState)
    updateHabit(id, text, index)
  }

  return (
    <div>
      <div className="completeButton">
        <Button
          variant="outline-primary"
          onClick={event => toggleBodyForm(event)}
        >
          Edit
        </Button>{" "}
      </div>
      <form onSubmit={event => onSubmit(event)}>
        <input
          type="text"
          style={formState}
          className="update-input"
          onChange={event => onChange(event)}
        />
      </form>
    </div>
  ); 

}

export default UpdateForm