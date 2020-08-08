import React from 'react'

function Home() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
  return (
    <div className="main">
      <div className="wrap">
        <h1 className="title">Habitico</h1>
        <h2 className="sub-title">Increase Your Productivity</h2>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Home