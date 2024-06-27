
import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: 'Help',
      links: ['Contact', 'Support', 'Privacy']
    },
    {
      header: 'Account',
      links: ['Login', 'Register', 'Nuevo']
    },
    {
      header: 'Messages',
      links: ['Backup', 'History', 'Roll']
    }
  ]

function generateFooterElements() {
  const footerElements = elements.map((column, columnIndex) => {
    return (
      <Grid item xs={12} md={4} key={columnIndex}>
        <Box borderBottom={1}>
          <Button sx={{ color: 'rgb(130, 133, 234)', fontWeight: 'bold', backgroundColor: 'rgb(9, 12, 91)' }}>
            {column.header}
          </Button>
        </Box>
        {column.links.map((link, linkIndex) => {
          return (
            <Box key={linkIndex}>
              <Button sx={{ color: 'rgb(130, 133, 234)', backgroundColor: 'rgb(9, 12, 91)', fontWeight: 'bold' }}>{link}</Button>
            </Box>
          )
        })}
      </Grid>
    )
  })
  return footerElements
}

  
  return (
      <footer style={{ marginTop: 'auto' }}>
      <Box bgcolor="rgb(9, 12, 91)" color="rgb(130, 133, 234)" padding={2}>
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box textAlign={'center'} py={2} m={0} bgcolor="black" color={'white'}>
        <Typography>© Groot project - All Rights Reserved</Typography>
      </Box>
    </footer>
  )
}

export default Footer