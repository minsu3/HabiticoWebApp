import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav";

function Habit({ id, text, habit, index, completeHabit, updateHabit, removeHabit }) {

  const [formState, setFormState] = useState({
    display: "none",
    formValue: ""
  });

  const toggleBodyForm = event => {
    event.preventDefault();
    formState.display === "block"
      ? setFormState({ display: "none", formValue: "" })
      : setFormState({ display: "block", formValue: "" });
  };

  const onChange = event => {
    setFormState({ display: "block", formValue: event.target.value });
    console.log(formState);
  };

  const onSubmit = event => {
    event.preventDefault();
    text = formState.formValue;
    console.log(formState);
    updateHabit(id, text, index);
    // updateHabitText()
  };  

  const lineThrough = {
    textDecoration: habit.isCompleted ? "line-through" : ""
  }

  return (
    
    <div className="habit">
      <div id={index} style={lineThrough}>
        <Nav.Link href={'/list/'+habit.text+'/'+id}>
          <h2 className="text">{habit.text}</h2>
        </Nav.Link>
      </div>
      <div className="completeButton">
        <Form onSubmit={event => onSubmit(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Update todo..."
              style={formState}
              className="update-input"
              onChange={event => onChange(event)}
            />
          </Form.Group>
        </Form>
        <Button
          className="button"
          variant="outline-primary"
          onClick={event => toggleBodyForm(event)}
        >
          Edit
        </Button>{" "}
        <Button
          className="button"
          variant="outline-primary"
          onClick={() => completeHabit(index)}
        >
          Complete
        </Button>{" "}
        <Button
          className="button"
          variant="outline-primary"
          onClick={() => removeHabit(habit, index)}
        >
          Delete
        </Button>{" "}
      </div>
    </div>
  );
}

export default Habit