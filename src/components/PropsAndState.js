import React, { useState } from "react"

export const PropsAndState = ({ yourName, address }) => {

  let [countClicks, setCountClicks] = useState(0)
  let [limitedClicks, setNegativeCountClicks] = useState(10)
  let [showText, setShowText] = useState(false)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)

    const newNegativeCountClicks = (limitedClicks - 1)
    setNegativeCountClicks(newNegativeCountClicks)
  }

  if (limitedClicks === -1) {
    setNegativeCountClicks(10)
    setShowText(!showText)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <div>{address.streetAddress}</div>
      <div>{address.city}</div>
      <div>{address.state}</div>
      <div>{address.zip}</div>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <p>{limitedClicks}</p>
      {showText ? <p>You did it!</p> : null}
    </>
  )
}