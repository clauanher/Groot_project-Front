import { useState } from 'react';
import LoginCard from '../../components/LoginCard/LoginCard';
import { login, signup } from '../../services/authService';
import dinamicImage from "../../assets/dinamic.jpg" 
import circularImage from "../../assets/circular.jpg"


function Login() {
  const [mostrarContenido, setMostrarContenido] = useState(false); 

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '70vh',
      backgroundColor: '#ccc',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'transform 0.5s ease',
    },
      revealedContent: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 10,
      textAlign: 'center',
      padding: '20px',
    },

    image: {
      width: '300px',
      height: 'auto',
      borderRadius: '10px',
    },

    circularImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      marginBottom: '20px',
    },

    loginCardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '200%',
    },
  };

   const handleClickImage = () => {
    setMostrarContenido(true);
  };

  
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer} onClick={handleClickImage}>
        {!mostrarContenido && (
             <img src={dinamicImage} alt="Imagen Dinamica" style={styles.image} />
        )}
        {mostrarContenido && (
        <div style={styles.revealedContent}>
        <img src={circularImage} alt="Imagen Circular" style={styles.image} /><div className="cajita-login-signup">
            <LoginCard/>
          </div></div>
        )}
      </div>
    </div>
  );
}

export default Login;
