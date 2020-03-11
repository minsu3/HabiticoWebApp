import React, { useState } from 'react';
import './App.css';
import HabitForm from './components/HabitForm'
import Habit from './components/Habit'

function App() {
  const [habits, setHabits] = useState([
    { 
      text: "",
      isCompleted: true 
    }
  ])

  const addHabit = text => {
    const newHabits = [...habits, { text }];
    setHabits(newHabits);
  }
  
  const completeHabit = index => {
    const newHabits = [...habits]
    newHabits[index].isCompleted = true
    setHabits(newHabits)
  }

  const removeHabit = index => {
    const newHabits = [...habits]
    newHabits.splice(index, 1)
    setHabits(newHabits)
  }

  return (
    <div className="app">
      <div className="habit-list">
        {habits.map((habit, index) => (
          <Habit
            key={index}
            index={index}
            habit={habit}
            completeHabit={completeHabit}
            removeHabit={removeHabit}
          />
        ))}
        <HabitForm addHabit={addHabit} />
      </div>
    </div>
  );
}

export default App;