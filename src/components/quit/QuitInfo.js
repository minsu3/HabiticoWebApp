import React from 'react'

// render this function when all forms are answered
function QuitInfo(props) {
  return (
    <div>
      <h1 className="title">{props.id}</h1>
      <div className="controls">
        <button>{props.id}</button>
      </div>
    </div>
  );
}

export default QuitInfo