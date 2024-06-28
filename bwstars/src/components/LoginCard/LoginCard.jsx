
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
    TextField, 
    Typography} from '@mui/material'
import { blue } from '@mui/material/colors'
import { useState } from 'react';
import { login, signup } from '../../services/authService'
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

   async function onSignup() {
        try {
            await signup({ email, password });
            navigate('/dashboard/Home'); // 
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.'); 
        }
    }

   return (
     <Card sx={{
       maxWidth: "600px", backgroundColor: "rgb(9, 12, 91)", color: "white", fontFamily: "Arial Black, sans-serif"}} raised={true}>
       <CardHeader title="Login/SignUp"></CardHeader>
       <CardContent>
         <TextField
           onChange={(e) => setEmail(e.target.value)}
           label="Email"
           type="text"
           variant="outlined"
           margin="dense"

           fullWidth={true}
           InputLabelProps={{
             style: { color: 'white', fontFamily: 'Arial Black, sans-serif' },
           }}
           InputProps={{
             style: { color: 'white', fontFamily: 'Arial Black, sans-serif' },
             startAdornment: (
               <InputAdornment position="start">
                 <Icon>
                   <Lock />
                 </Icon>
               </InputAdornment>
             ),
             endAdornment: (
               <InputAdornment position="start">
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
           InputLabelProps={{
             style: { color: 'white', fontFamily: 'Arial Black, sans-serif' },
           }}
           InputProps={{
             style: { color: 'white', fontFamily: 'Arial Black, sans-serif' },
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
       <CardActions sx={{ display: "flex", justifyContent: "flex-end", color: "white" }}>
         <Button 
         size="small" color="secondary" variant="contained" onClick={() => 
         onSignup()}>
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