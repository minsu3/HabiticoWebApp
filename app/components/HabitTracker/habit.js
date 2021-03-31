import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Habit({ id, text, index, quit, updateHabit, removeHabit }) {
  const [formState, setFormState] = useState({});

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

  // const quitText = quit.text;
  // console.log("quitText: ", quitText);

  return (
    <div className="habit-list">
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>the modal</button>
      </form>
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

export default Habit;
