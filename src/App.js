import React, { useState, useEffect } from 'react';
import './App.css';
import HabitForm from './components/HabitForm'
import Habit from './components/Habit'

function App(props) {

  const [habits, setHabits] = useState([
    {
      text: '',
      id: null,
      isCompleted: false
    }
  ])
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:4000/getList`)
      const jsonData = await response.json()
      const allHabits = jsonData.map(habit => {
        // habit.habit
        // habit._id
        const habitObject = {
          text: habit.habit,
          id: habit._id,
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
    
    // make a POST request
    const url = "http://localhost:4000/";
    const bodyObj = {
        "habit": text
    }
    const otherParam = {
      method: "POST",
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(url, otherParam)
      .then(results => results.json)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  }

  const completeHabit = index => {
    const newHabits = [...habits]
    newHabits[index].isCompleted = true
    setHabits(newHabits)
  }

  const removeHabit = (habit, index) => {
    const newHabits = [...habits];
    
    console.log(habit)
    fetch(`http://localhost:4000/${habit.id}`, { method: "DELETE" })
    .then(res => res.json())
    .catch(err => console.log('Could not delete habit \n', err))
    newHabits.splice(index, 1);
    setHabits(newHabits);
  };

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