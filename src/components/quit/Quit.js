import React, { useState, useEffect } from 'react'
import QuitList from './QuitList'
// import Insert from './Insert'
// import { updateHabit }  from "./HabitService";
import './Quit.css'
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
      const response = await fetch(
        "https://vast-anchorage-73432.herokuapp.com/habits"
      );
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
    getData().catch(err => console.log(err))
  }, [props])

  const updateHabit = (id, text, index) => {
    console.log(id, text, index);
    const url = `https://vast-anchorage-73432.herokuapp.com/habits/${id}`;
    const bodyObj = {
      habit: text,
    };
    const param = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };
    fetch(url, param)
      .then((res) => res.json())
      .catch((err) => console.log("Could not update habit \n", err));
  };

  const removeHabit = (habit, index) => {
    const newHabits = [...quits];
    setQuit(newHabits);
    newHabits.splice(index, 1);

    fetch(`https://vast-anchorage-73432.herokuapp.com/habits/${habit.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log("Could not delete habit \n", err));
  };

  return (
    <div className="main-quit">
      <div className="wrap">
        <h1 className="title">Quit Habits</h1>
        <h2 className="sub-title">
          Everyone has something they want to quit...
        </h2>
          {
            !quits.length
            ? 
            <div className="button-container">
              <Button className="start" variant="secondary" href={"/insert"}>
                Click here to get started
              </Button>
            </div>
            : 
            quits.map((quit, index) => (
              <QuitList
                id={quit.id}
                text={quit.text}
                key={index}
                index={index}
                quit={quit}
                updateHabit={updateHabit}
                removeHabit={removeHabit}
              />
            )
          ) || 
          (<div className="button-container">
            <Button className="start" variant="secondary" href={"/insert"} style={{margin: "20px"}}>
              Add another habit
            </Button>
          </div>)
          }
      </div>
    </div>
  );
}

export default Quit