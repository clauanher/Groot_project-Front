import { Link } from 'react-router-dom'; 
import Carousel from "../../components/Carrousel/Carousel";


const Home = () => {

    const styles = {
        homeContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
        },
         leftPanel: {
            flex: 1,
            backgroundColor: '#e0e0e0',
            padding: '20px',
            marginRight: '10px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        rightPanel: {
            flex: 2,
            backgroundColor: '#f0f0f0',
            padding: '20px',
            marginLeft: '10px',
            borderRadius: '8px',
        },
        image: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
        },
        sectionsContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px',
            width: '100%',
        },
        card: {
            flex: 1,
            backgroundColor: '#ffffff',
            padding: '20px',
            margin: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textDecoration: 'none', 
            color: 'inherit',
        },
    };

return (
        <div>
            <div style={styles.homeContainer}>
                <div style={styles.leftPanel}>
                    <Carousel/>
                </div>
                <div style={styles.rightPanel}>
                    <p>Introducción</p>
                </div>
            </div>
            <div style={styles.sectionsContainer}>
                <Link to="/dashboard/Stars" style={styles.card}>
                    <h3>Sección cereales</h3>
                    <p>Explora nuestra variedad de cereales.</p>
                </Link>
                <Link to="/dashboard/Constellation" style={styles.card}>
                    <h3>Crea tu bowl</h3>
                    <p>Personaliza tu propio bowl de cereales.</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;
