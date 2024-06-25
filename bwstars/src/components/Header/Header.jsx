import { Link, useLocation } from 'react-router-dom'
import { AppBar, Button } from '@mui/material'

const options = ["Home", "Profile", "Stars", "Constellations"];

function Header() {
  const location = useLocation()
  return (
    <AppBar  position = 'sticky' sx={{display:"flex", flexDirection:"row"}}>
        {options.map((option, idx)=> {
        return <Link to={option} key={idx}>
        <Button sx ={{color:"White"}} disabled={location.pathname.includes(option)}>
        {option}
        </Button>
        </Link>
        }
        )}
    </AppBar>
  )
}

export default Header