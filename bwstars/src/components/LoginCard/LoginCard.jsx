
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    Divider, 
    Icon, 
    IconButton, 
    InputAdornment, 
    TextField } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useState } from 'react';
import { login } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

  function LoginCard({ goToRegister }) {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  async function onLogin() {
    try {
      const loginResponse = await login({email, password})
      localStorage.setItem('token',loginResponse.result)
      navigate('/dashboard/Home')
    } catch (error) {
    }
  }

   return (
     <Card sx={{ maxWidth: "700px", backgroundColor: blue[300] }} raised={true}>
       <CardHeader title="Login"></CardHeader>
       <CardContent>
         <TextField
           onChange={(e) => setEmail(e.target.value)}
           label="Email"
           type="text"
           variant="outlined"
           margin="dense"
           fullWidth={true}
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <Icon>
                   <Lock />
                 </Icon>
               </InputAdornment>
             ),
             endAdornment: (
               <InputAdornment position="start">
                 <IconButton>
                   <VisibilityOff />
                 </IconButton>
               </InputAdornment>
             ),
           }}
         />,
         <TextField
           onChange={(e) => setPassword(e.target.value)}
           label="Password"
           type={isPassVisible ? "text" : "password"}
           variant="outlined"
           margin="dense"
           fullWidth={true}
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <Icon>
                   <Lock />
                 </Icon>
               </InputAdornment>
             ),
             endAdornment: (
               <InputAdornment position="start">
                 <IconButton
                   onClick={() => {
                     setIsPassVisible((oldState) => !oldState);
                   }}
                 >
                   {isPassVisible ? <Visibility /> : <VisibilityOff />}
                 </IconButton>
               </InputAdornment>
             ),
           }}
         />
         {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
       </CardContent>
       <Divider />
       <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
         <Button 
         size="small" color="secondary" variant="contained" onClick={() => 
         goToRegister()}>
         Register
        </Button>
         <Button size="small" variant="contained" onClick={() => 
          onLogin()} color="success">
           Login
         </Button>
       </CardActions>
     </Card>
   );
}

export default LoginCard