import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./cakeSlice"

const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)

  const dispatch = useDispatch()

  const amtToReStock = 5

  return (
    <div>
      <h1>Cake View</h1>
      <h2>Number of cakes 🍰 - {numOfCakes}</h2>
      <button onClick={() => {
        dispatch(ordered())
      }}>Buy one 🍰</button>
      <button onClick={() => {
        dispatch(restocked(amtToReStock))
      }}>Restock {amtToReStock} cakes</button>
    </div>
  )
}

export default CakeView