
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

function LoginCard() {
    const [isPassVisible, setIsPassVisible] = useState(false);
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
               <InputAdornment>
                 <Icon>
                   <Lock />
                 </Icon>
               </InputAdornment>
             ),
             endAdornment: (
               <InputAdornment>
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
               <InputAdornment>
                 <Icon>
                   <Lock />
                 </Icon>
               </InputAdornment>
             ),
             endAdornment: (
               <InputAdornment>
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
         <Button size="small" color="secondary" variant="contained">
           Register
         </Button>
         <Button size="small" color="primary" variant="contained">
           Login
         </Button>
       </CardActions>
     </Card>
   );
}

export default LoginCard