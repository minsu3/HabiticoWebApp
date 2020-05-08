import React, { useState, useEffect } from 'react'
import QuitList from './QuitList'
import Insert from './Insert'
import '../Quit.css'
import Button from "react-bootstrap/Button";


function Quit(props) {
  const [quits, setQuit] = useState([
    {
      text:'',
      id: null,
    }
  ])
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/habits")
      const jsonData = await response.json()
      const allHabits = jsonData.map(habit => {
        const habitObject = {
          text: habit.habit,
          id: habit._id
        }
        return habitObject
      })
      setQuit(allHabits)
    }
    getData().catch((err) => console.log(err))
  }, [props])

  const addHabit = text => {
    const newHabits = [...quits, { text }]
    setQuit(newHabits)
    const url = "http://localhost:4000/habits"
    const bodyObj = {
      "habit": text
    }
    const param = {
      method: "POST",
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch(url, param)
    .then(results => results.json)
    .then(res => {
      console.log((res))
    })
    .catch(error => console.log(error))
  }

    const updateHabit = (id, text, index) => {
      console.log(id, text, index)
      const url = `http://localhost:4000/habits/${id}`;
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
      const newHabits = [...quits];

      fetch(`http://localhost:4000/habits/${habit.id}`, { method: "DELETE" })
        .then(res => res.json())
        .catch(err => console.log('Could not delete habit \n', err))
      newHabits.splice(index, 1);
      setQuit(newHabits);
    };

  return (
    <div className="main">
      <div className="wrap">
        <h1 className="title">Quit Bad Habits</h1>
        <h2 className="sub-title">
          Everyone has something they want to quit...
        </h2>
        <div>
          {quits.length ? (
            quits.map((quit, index) => (
              <QuitList
                id={quit.id}
                text={quit.text}
                key={index}
                index={index}
                quit={quit}
                addHabit={addHabit}
                updateHabit={updateHabit}
                removeHabit={removeHabit}
              />
            ))
          ) : (
            <div className="button-container">
              <Button className="start" variant="secondary" href={"/insert"}>
                Add to the quit list
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quit