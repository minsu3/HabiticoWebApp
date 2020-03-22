import React, { useState, useEffect } from 'react';
import './App.css';
import HabitForm from './components/HabitForm'
import Habit from './components/Habit'

function App(props) {
  const [habits, setHabits] = useState([
    {
      text: '',
      isCompleted: false
    }
  ])
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:4000/getTodos`)
      const jsonData = await response.json()
      console.log(jsonData[0]['todo'])

      const list = jsonData.map(value => value.todo)
      console.log(list)

      const allHabits = list.map(habit => {
        const habitObject = {
          text: habit,
          isCompleted: false
        }
        return habitObject
      })

      setHabits(allHabits)
    }
    
    getData().catch((err) => console.log(err));
    
  }, [props])

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