import React, { useState, useEffect } from 'react';
import './List.css';
import AddForm from './components/AddForm'
import Todo from './components/Todo'

function List(props) {
  const [todos, setTodos] = useState([
    {
      text: '',
      id: null,
      isCompleted: false
    }
  ])
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://vast-anchorage-73432.herokuapp.com/getList`)
      const jsonData = await response.json()
      const allTodos = jsonData.map(todo => {
        const todoObject = {
          text: todo.todo,
          id: todo._id,
          isCompleted: false
        }
        return todoObject
      })
      setTodos(allTodos)
    }
    getData().catch((err) => console.log(err));
  }, [props])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);

    // make a POST request
    const url = "https://vast-anchorage-73432.herokuapp.com/";
    const bodyObj = {
      "todo": text
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

  const completeTodo = (todo, index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos);
    removeTodo(todo)
  }

  const updateTodoText = (text, index) => {
    const newTodos = [...todos];
    newTodos[index].text = text
    setTodos(newTodos)
  };

  const updateTodo = (id, text, index) => {
    console.log(id, text, index)
    const url = `https://vast-anchorage-73432.herokuapp.com/${id}`;
    const bodyObj = {
      "todo": text
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
      .catch(err => console.log("Could not update todo \n", err))
  }

  const removeTodo = (todo, index) => {
    const newTodos = [...todos];
    
    fetch(`https://vast-anchorage-73432.herokuapp.com/${todo.id}`, { method: "DELETE" })
      .then(res => res.json())
      .catch(err => console.log('Could not delete todo \n', err))
      newTodos.splice(index, 1);
      setTodos(newTodos);
  };

  if (todos === null) {
    return <h3>Loading...</h3>
  } else {
    return (
    <div className="app">
      <div className="wrap">
        <h1 className="title">Todo</h1>
        <h2 className="sub-title">What is your main focus for today?</h2>
        <div className="habit-list">
          {todos.map((todo, index) => (
            <Todo
              id={todo.id}
              text={todo.text}
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
              updateTodoText={updateTodoText}
            />
          ))}
          <AddForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  )}
}

export default List;