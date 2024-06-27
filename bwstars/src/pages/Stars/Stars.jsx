import { useEffect, useState } from 'react';
import { getAllStars, adoptStar, addLike } from "../../services/starsService";

const imageUrls = [
  { image: '../src/assets/estrellas/lila.png', 
    description: 'Procyon, la estrella más brillante de Canis Minor, es una binaria a 11.5 años luz con una estrella blanco-amarilla de secuencia principal y una enana blanca.' }, 
  { image: '../src/assets/estrellas/naranja.png', 
    description: 'Sirio, la estrella más brillante del cielo nocturno, es una binaria en Canis Major a 8.6 años luz, compuesta por una estrella blanca de secuencia principal y una enana blanca.' }, 
  { image: '../src/assets/estrellas/rosa.png', 
    description: 'Canopus, la segunda estrella más brillante del cielo, es una supergigante blanca en Carina a 310 años luz con un diámetro 71 veces mayor que el del Sol y una luminosidad 10,000 veces superior.' },
  { image: '../src/assets/estrellas/verde.png',
    description: 'Arcturus, la estrella más brillante de Bootes, es una gigante roja a 37 años luz de la Tierra con un diámetro 25 veces mayor que el del Sol y un brillo 170 veces superior.' }
  ];


function Stars() {
  const [stars, setStars] = useState([]);
  const [selectedStar, setSelectedStar] = useState(null);

  async function displayStars() {
    const result = await getAllStars();
    setStars(result.result);
  }

  const handleAdopt = async (id) => {
    try {
      const response = await adoptStar(id);
      if (response.success) {
        setStars(
          stars.map((star) =>
            star.id === id ? { ...star, adopted: true } : star
          )
        );
      } else {
        console.error("Error al adoptar la estrella:", response.message);
      }
    } catch (error) {
      console.error("Error al adoptar la estrella:", error);
    }
  };

  const handleLike = async (id) => {
    try {
      console.log (id)
      const response = await addLike(id);
      if (response.success) {
        setStars(
          stars.map((star) =>
            star.id === id ? { ...star, likes: star.likes + 1 } : star
          )
        );
      } else {
        console.error("Error al dar like a la estrella:", response.message);
      }
    } catch (error) {
      console.error("Error al dar like a la estrella:", error);
    }
  };

  const showStars = () => {
    return stars.map((star, index) => (
      <div
        key={star.id}
        style={styles.starCard}
        onClick={() => setSelectedStar(star)}
      >
        <h3 style={styles.starName}>{star.name}</h3>
        <img src={imageUrls[index % imageUrls.length].image} alt={star.name} style={styles.starImage} />

        <button onClick={() => handleAdopt(star.id)} disabled={star.adopted}>
          {star.adopted ? "ADOPTADA" : "ADOPTAR"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLike(star.id);
          }}
        >
          🩷 {star.likes}
        </button>
      </div>
    ));
  };

  useEffect(() => {
    displayStars();
  }, []);

  return (
    <div style={styles.container}>
      <section style={styles.descriptionSection}>
        <h1>BIENVENIDO A STARFLAKE</h1>
        <p>ESTA PÁGINA MUESTRA LAS DIVERSAS COLECCIONES DE ESTRELLAS</p>
        <p> HAZ CLIC EN CUALQUIER ESTRELLA PARA VER MÁS DETALLES SOBRE ELLA</p>
      </section>
      <section style={styles.cardsSection}>
        {showStars()}
      </section>
      {selectedStar && (
        <div style={styles.detailCard}>
          <h2>{selectedStar.name}</h2>
          <img src={imageUrls[stars.findIndex(star => star.id === selectedStar.id) % imageUrls.length].image} alt={selectedStar.name} style={styles.detailImage} />
         
          <p>ID: {selectedStar.id}</p>
          <p>{imageUrls[stars.findIndex(star => star.id === selectedStar.id) % imageUrls.length].description}</p>

          <button onClick={() => setSelectedStar(null)} style={styles.closeButton}>Close</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial Black, sans-serif',
    padding: '10px',
    color: 'rgb(215, 240, 103)',
    backgroundColor: 'rgb(9, 12, 91)',
    fontSize: '20px'
  },
  descriptionSection: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '25px'
  },
  cardsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  
  },
  starCard: {
    border: '4px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    backgroundColor: 'rgb(130, 133, 234)'
  },
  starCardHover: {
    transform: 'scale(1.05)',
  },
  starName: {
    fontSize: '1.2em',
    margin: '10px 0',
    fontFamily: 'Arial Black, sans-serif',
  },
  starImage: {
    width: '100%',
    borderRadius: '5px',
    fontFamily: 'Arial Black, sans-serif',
  },

 

  detailCard: {
    position: 'fixed',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    backgroundColor: 'rgb(130, 133, 234)',
    fontFamily: 'Arial Black, sans-serif',
  },
  detailImage: {
    width: '50%',
    borderRadius: '10px',
    marginBottom: '20px',
    

  },
  closeButton: {
    padding: '10px 20px',
    backgroundColor: 'rgb(230, 40, 120)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Arial Black, sans-serif',
  }, 

  
};

export default Stars;