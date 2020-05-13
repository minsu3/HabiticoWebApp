

const addHabit = (text) => {
  const url = "https://vast-anchorage-73432.herokuapp.com/habits";
  const bodyObj = {
    habit: text,
  };
  const param = {
    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, param)
    .then((results) => results.json)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};



export { addHabit }