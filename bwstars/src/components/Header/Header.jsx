import { Link, useLocation } from 'react-router-dom'
import { AppBar, Button } from '@mui/material'

const options= [ "Home", "Profile", "Stars", "Constellations" ]

function Header() {
  const location = useLocation()
 
  return (
    <AppBar  position = 'sticky' 
    sx={{display:"flex",
       flexDirection:"row",
        backgroundColor: 'rgb(9, 12, 91)',// Cambia el color de fondo del AppBar
        
    }}>
        {options.map((option, idx)=> {
        return <Link to={option} key={idx}>
          <Button sx={{
            color: 'rgb(130, 133, 234)',
          fontSize: '15px',
            fontFamily: 'Arial Black, sans-serif',
            
        }} disabled={location.pathname.includes(option)}>
        {option}
        </Button>
        </Link>
        }
        )}
    </AppBar>
  )
}

export default Header