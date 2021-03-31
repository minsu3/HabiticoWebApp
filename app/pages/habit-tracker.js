import React, { useState, useEffect } from "react";
import Habit from "../components/HabitTracker/habit";
import Button from "react-bootstrap/Button";
import Header from "../shared/header";
import Footer from "../shared/footer";
import Modal from "react-modal";

import styles from "../styles/pagesStyle/habitTracker.module.css";

function HabitTracker(props) {
  const [quits, setQuit] = useState([]);
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

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    content: {
      position: "absolute",
      top: "90px",
      left: "190px",
      right: "190px",
      bottom: "90px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "50px",
    },
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1>Quit Habits, Create Better Ones.</h1>
          <h3 className={styles.subTitle}>
            Everyone has something they want to quit...
          </h3>
        </div>
        {!quits.length ? (
          <div className={styles.buttonContainer}>
            <Button onClick={openModal} variant="info">
              Click here to get started!
            </Button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={customStyle}
            >
              <Habit />
            </Modal>
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
            <div className={styles.buttonContainer}>
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
      <Footer />
    </div>
  );
}

export default HabitTracker;
