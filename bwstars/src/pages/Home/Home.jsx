import myImage from "../../assets/logo.png" // Reemplaza esta ruta con la ruta de tu imagen


const Home = () => {

    const styles = {
        homeContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
        },
        leftPanel: {
            flex: 1,
            backgroundColor: '#f0f0f0',
            padding: '20px',
            marginRight: '10px',
            borderRadius: '8px',
        },
        rightPanel: {
            flex: 2,
            backgroundColor: '#e0e0e0',
            padding: '20px',
            marginLeft: '10px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
        }
    };

    return (
        <div style={styles.homeContainer}>
            <div style={styles.rightPanelPanel}>
              
               <img src={myImage} alt="Mi Imagen" style={styles.image} />
             
            </div>
            <div style={styles.leftPanel}>
                    <p>Introducción</p>
            </div>
        </div>
    );
};

export default Home;
