import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"

const IceCreamView = () => {
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch();

  const amtToReStock = 5

  return (
    <div>
      <h1>Ice cream View</h1>
      <h2>Number of ice-creams 🍦 - {numOfIcecreams}</h2>
      <button onClick={() => {
        dispatch(ordered())
      }}>Buy one 🍦 </button>
      <button onClick={() => {
        dispatch(restocked(amtToReStock))
      }}>Restock {amtToReStock} Ice creams 🚚</button>
    </div>
  )
}

export default IceCreamView