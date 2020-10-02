import React, { useState } from 'react'
// import Form from "react-bootstrap/Form";
// import Quit from './Quit'
import Button from "react-bootstrap/Button";

function QuitList({ id, text, index, quit, updateHabit, removeHabit }) {
  const [formState, setFormState] = useState({
    display: "none",
    formValue: "",
  });

  const toggleBodyForm = (event) => {
    event.preventDefault();
    formState.display === "block"
      ? setFormState({ display: "none", formValue: "" })
      : setFormState({ display: "block", formValue: "" });
  };

  // const onChange = (event) => {
  //   setFormState({ display: "block", formValue: event.target.value });
  //   console.log(formState);
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   text = formState.formValue;
  //   updateHabit(id, text, index);
  //   console.log(text);
  //   toggleBodyForm(event);
  // };

  const quitText = quit.text;
  console.log("quitText: ", quitText);

  return (
    <div className="habit-list">
      <h2 className="text">{quitText}</h2>
      <div>
        <Button
          className="button"
          variant="outline-primary"
          onClick={(event) => toggleBodyForm(event)}
        >
          Edit
        </Button>{" "}
        <Button
          className="button"
          variant="outline-primary"
          onClick={() => removeHabit(quit, index)}
        >
          Delete
        </Button>{" "}
      </div>
    </div>
  );
}

export default QuitList