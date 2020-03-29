import React, { useState } from 'react';

function Habit({ habit, index, completeHabit, updateHabit, removeHabit }) {
  const [value, setValue] = useState("")

  const lineThrough = {
    textDecoration: habit.isCompleted ? "line-through" : ""
  }

  const updateForm = {
    display: "none"
  }

  const toggleBodyForm = () => {
    const formElement = document.getElementById('form')
    formElement.style = { 
      display: 'block'
    }
  }

  return (
    <div>
      <div className="habit" id={index} style={lineThrough}>
        {habit.text}
      </div>
      <form style={updateForm} id="form">
        <input type="text" className="input" />
      </form>
      <div className="completeButton">
        <button onClick={() => completeHabit(index)}>Complete</button>
        <button onClick={() => removeHabit(habit, index)}>x</button>
        <button onClick={() => toggleBodyForm()}>Edit</button>
      </div>
    </div>
  );
}

export default Habit