import { useEffect, useState } from 'react'
import './Stars.css'
import { getAllStars } from '../../services/starsService'

function Stars() {
  const [stars,setStars] = useState([])
  async function displayStars() {
    const result = await getAllStars()
    setStars(result)
  }
  useEffect(() => {
    displayStars()
  },[])
  return (

    <div>{stars.map(star => <p>{star.name}</p>)}</div>
  )
}

export default Stars