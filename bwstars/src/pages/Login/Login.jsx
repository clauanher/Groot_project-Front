import { useState } from "react";
import LoginCard from "../../components/LoginCard/LoginCard";
import dinamicImage from "/astro1.jpg";
import circularImage from "/color.png";

function Login() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'black',
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      backgroundColor: 'black',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'transform 0.5s ease',
    },
    revealedContent: {
      position: 'relative',
      top: 0,
      left: 0,
      width: '80%',
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      zIndex: 10,
      textAlign: 'center',
      padding: '20px',
    },
    image: {
      width: '900px',
      height: 'auto',
      borderRadius: '10px',
      
    },
    circularImage: {
      width: '450px',
      height: '450px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    LoginCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
    },

  };

  const handleClickImage = () => {
    setMostrarContenido(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer} onClick={handleClickImage}>
        {!mostrarContenido && (
          <img src={dinamicImage} alt="Imagen Dinámica" style={styles.image} />
        )}
        {mostrarContenido && (
          <div style={styles.revealedContent}>
            <img src={circularImage} alt="Imagen Circular" style={styles.circularImage} />
            <div style={styles.loginCardContainer}>
              <LoginCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
