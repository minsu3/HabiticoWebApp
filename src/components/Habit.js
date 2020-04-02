import React from 'react';
import Button from "react-bootstrap/Button";
import UpdateForm from './UpdateForm'

function Habit({ habit, index, completeHabit, updateHabit, removeHabit }) {

  const lineThrough = {
    textDecoration: habit.isCompleted ? "line-through" : ""
  }

  return (
    <div className="habit">
      <div id={index} style={lineThrough}>
        <h2 className="text">{habit.text}</h2>
      </div>
      <div className="completeButton">
        <UpdateForm 
          id={habit.id}
          text={habit.text}
          index={index}
          updateHabit={updateHabit}
        />
        <Button 
          variant="outline-primary" 
          onClick={() => completeHabit(index)}
        >
          Complete
        </Button>{" "}
        <Button
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