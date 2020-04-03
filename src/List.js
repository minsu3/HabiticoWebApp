import React, { useState, useEffect } from 'react';
import './List.css';
import AddForm from './components/AddForm'
import Habit from './components/Habit'

function List(props) {
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

  const updateHabit = (id, text, index) => {
    console.log(id, text, index)
    const url = `http://localhost:4000/${id}`;
    const bodyObj = {
      "habit": text
    }
    const param = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj) 
    }
    fetch(url, param)
      .then(res => res.json())
      .catch(err => console.log("Could not update habit \n", err))
  }

  const removeHabit = (habit, index) => {
    const newHabits = [...habits];
    
    fetch(`http://localhost:4000/${habit.id}`, { method: "DELETE" })
      .then(res => res.json())
      .catch(err => console.log('Could not delete habit \n', err))
      newHabits.splice(index, 1);
      setHabits(newHabits);
  };

  return (
    <div className="app">
      <h1 className="title">Habit Lists</h1>
      <div className="habit-list">
        {habits.map((habit, index) => (
          <Habit
            id={habit.id}
            text={habit.text}
            key={index}
            index={index}
            habit={habit}
            completeHabit={completeHabit}
            updateHabit={updateHabit}
            removeHabit={removeHabit}
          />
        ))}
        <AddForm addHabit={addHabit} />
      </div>
    </div>
  );
}

export default List;