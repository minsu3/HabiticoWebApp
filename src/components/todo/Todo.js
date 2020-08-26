import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./list.module.css";

function Todo({ id, text, todo, index, completeTodo, updateTodo, removeTodo, updateTodoText }) {
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
    updateTodo(id, text, index);
    updateTodoText(text, index);
    toggleBodyForm(event)
  };

  const todoText = todo.text;
  console.log("todoText: ", todoText);

  const lineThrough = {
    textDecoration: todo.isCompleted ? "line-through" : ""
  }

  return (
    <div className={styles.habit}>
      <div className={styles.textContainer}>
        <h2 id={index} style={lineThrough} className={styles.text}>
          {todoText}
        </h2>
      </div>
      <div className={styles.completeButton}>
        <Form onSubmit={(event) => onSubmit(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Update todo..."
              style={formState}
              className={styles.updateInput}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
        </Form>
        <Button
          className={styles.button}
          variant="outline-primary"
          onClick={(event) => toggleBodyForm(event)}
        >
          Edit
        </Button>{" "}
        <Button
          className={styles.button}
          variant="outline-primary"
          onClick={() => completeTodo(todo, index)}
        >
          Complete
        </Button>{" "}
        <Button
          className={styles.button}
          variant="outline-primary"
          onClick={() => removeTodo(todo, index)}
        >
          Delete
        </Button>{" "}
      </div>
    </div>
  );
}

export default Todo