import { Link } from 'react-router-dom'; 
import Carousel from "../../components/Carrousel/Carousel";


const Home = () => {

    const styles = {
        homeContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: 'rgb(9, 12, 91)',
            fontFamily: 'Arial Black, sans-serif', // Añade la fuente deseada
            color: 'white'
            
        },
        leftPanel: {
            flex: 1,
            background: 'rgb(215, 240, 103)',  // Color oscuro de fondo con 10% de opacidad
            padding: '20px',
            marginRight: '10px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        rightPanel: {
            flex: 2,
            background: 'rgb(9, 12, 91)',  // Color oscuro de fondo con 10% de opacidad
            padding: '20px',
            marginLeft: '10px',
            borderRadius: '8px',
            //backgroundImage: `url(${rightPanelBackground})`,  // Imagen de fondo para rightPanel
        },
      
        sectionsContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            backgroundColor: 'rgb(9, 12, 91)',
            fontFamily: 'Arial, sans-serif', // Añade la fuente deseada
            color: 'white'
        },
        card: {
            flex: 1,
            backgroundColor: 'rgb(9, 12, 91)', 
            padding: '30px',
            margin: '40px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textDecoration: 'none',
            fontFamily: 'Arial Black, sans-serif', // Añade la fuente deseada
            color: 'rgb(243, 255, 21)',
            fontSize: '25px',
            background: 'rgb(130, 133, 234)', // Color oscuro de fondo con 10% de opacidad
        },

    };

return (
        <div>
            <div style={styles.homeContainer}>
                <div style={styles.leftPanel}>
                    <Carousel/>
                </div>
                <div style={styles.rightPanel}>
                <h1>En BREAKFAST WITH STARS,</h1>
                <p>creemos que cada estrella cuenta una historia y cada constelación es una obra de creatividad. Nuestra misión es inspirar y divertir a través de un juego único donde puedes formar constelaciones con cajas de cereales.</p>
                <p>¿Te gustaría unirte a una comunidad de entusiastas que comparten esta pasión? ¡Estás en el lugar indicado!</p>
                <h2>¿Cómo funciona?</h2>
                <p>Regístrate en nuestra página para crear tu cuenta y empezar a formar constelaciones únicas con cajas de cereales.</p>
                <p>Comparte tus creaciones, recibe comentarios y participa en desafíos para ganar premios.</p>
                <h1>Únete a nosotros hoy</h1>
                <p>No pierdas la oportunidad de ser parte de este divertido juego. ¡Regístrate y empieza a formar tus constelaciones!</p>
                <p>En Breakfast with Stars, cada constelación tiene una historia, y cada jugador es parte de nuestra comunidad de soñadores.</p>
            </div>
            </div>
            <div style={styles.sectionsContainer}>
                <Link to="/dashboard/Stars" style={styles.card}>
                    <h1>STARFLAKES</h1>
                    <p>Explora nuestra variedad de cereales</p>
                </Link>
                <Link to="/dashboard/Constellation" style={styles.card}>
                    <h1>BOWLS</h1>
                    <p>Personaliza tu propio bowl de cereales</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;
