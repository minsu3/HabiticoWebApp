import React from 'react';

function Habit({ habit, index, completeHabit, removeHabit }) {
  return (
    <div
      className="habit"
      style={{ textDecoration: habit.isCompleted ? "line-through" : "" }}
    >
      {habit.text}
      <div>
        <button onClick={() => completeHabit(index)}>Complete</button>
        <button onClick={() => completeHabit(index)}>x</button>
      </div>
    </div>
  )
}

export default Habit