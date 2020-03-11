import React, { useState } from 'react'

function HabitForm({ addHabit }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addHabit(value);
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default HabitForm