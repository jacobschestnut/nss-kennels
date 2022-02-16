import React, { useEffect, useState } from "react"

export const PropsAndState = ({ yourName, address }) => {

  let [countClicks, setCountClicks] = useState(0)
  let [multiplication, setMultiplication] = useState(0)
  let [limitedClicks, setNegativeCountClicks] = useState(10)
  let [showText, setShowText] = useState(false)

  const handleClick = () => {
 
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)

    const newNegativeCountClicks = (limitedClicks - 1)
    setNegativeCountClicks(newNegativeCountClicks)
  }

  useEffect(() => {
    setMultiplication(+countClicks * 4);
  }, [countClicks]);

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
      <p>{multiplication}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <p>{limitedClicks}</p>
      {showText ? <p>You did it!</p> : null}
    </>
  )
}