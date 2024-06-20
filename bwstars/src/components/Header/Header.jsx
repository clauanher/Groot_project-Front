import { Link } from 'react-router-dom'
import './Header.css'
import { AppBar, Button } from '@mui/material'

const options= [ "Home", "Profile" ]

function Header() {
  return (
    <AppBar  position = 'sticky' sx={{display:"flex", flexDirection:"row"}}>
        {options.map((option, idx)=> {
        return <Link to={option} key={idx}>
        <Button sx ={{color:"White"}}> 
        {option}
        </Button>
        </Link>
        }
        )}
    </AppBar>
  )
}

export default Header