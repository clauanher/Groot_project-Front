import { useEffect, useState } from 'react'
import './Stars.css'
import { getAllStars } from '../../services/starsService'

function Stars() {
  const [stars,setStars] = useState([])
  async function displayStars() {
    const result = await getAllStars()
    setStars(result.result)
  }
  const showStars = () => {
   const result = stars.map (star => <p key={star.id}> {star.name} </p>)
   return result
  }
  useEffect(() => {
    displayStars()
  },[])
  return (

    <div> {showStars()} </div>
  )
}

export default Stars