import React, { useState, useEffect } from "react";
// import Insert from './Insert'
import Habit from "../components/HabitTracker/habit";
// import { updateHabit }  from "./HabitService";
import Button from "react-bootstrap/Button";
import Header from "../shared/header";

import styles from "../styles/pagesStyle/habitTracker.module.css";

// const HabitTracker = () => {
//   return (
//     <div className={styles.app}>
//       <Header />
//       <div className="habit-list">
//         <h2 className="text">{quitText}</h2>
//         <div>
//           <Button
//             className="button"
//             variant="outline-primary"
//             onClick={(event) => toggleBodyForm(event)}
//           >
//             Edit
//           </Button>{" "}
//           <Button
//             className="button"
//             variant="outline-primary"
//             onClick={() => removeHabit(quit, index)}
//           >
//             Delete
//           </Button>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

function HabitTracker(props) {
  const [quits, setQuit] = useState([
    {
      text: "",
      id: null,
    },
  ]);
  const [habit, setHabit] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/habits");
      const jsonData = await response.json();
      const allHabits = jsonData.map((habit) => {
        const habitObject = {
          text: habit.habit,
          id: habit._id,
        };
        return habitObject;
      });
      setQuit(allHabits);
    }
    getData().catch((err) => console.log(err));
  }, [props]);

  const updateHabit = (id, text, index) => {
    console.log(id, text, index);
    const url = `http://localhost:4000/habits/${id}`;
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

    fetch(`http://localhost:4000/habits/${habit.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log("Could not delete habit \n", err));
  };

  return (
    <div className={styles.mainQuit}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Quit Habits</h1>
        <h2 className={styles.subTitle}>
          Everyone has something they want to quit...
        </h2>
        {!quits.length ? (
          <div className="buttonContainer">
            <Button className="start" variant="secondary" href={"/insert"}>
              Click here to get started
            </Button>
          </div>
        ) : (
          quits.map((quit, index) => (
            <Habit
              id={quit.id}
              text={quit.text}
              key={index}
              index={index}
              quit={quit}
              updateHabit={updateHabit}
              removeHabit={removeHabit}
            />
          )) || (
            <div className="buttonContainer">
              <Button
                className="start"
                variant="secondary"
                href={"/insert"}
                style={{ margin: "20px" }}
              >
                Add another habit
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default HabitTracker;
