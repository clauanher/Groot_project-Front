import { useEffect, useState } from 'react';
import { getAllStars, adoptStar, addLike } from "../../services/starsService";

const imageUrls = [
  '../src/assets/estrellas/lila.png',
  '../src/assets/estrellas/naranja.png',
  '../src/assets/estrellas/rosa.png',
  '../src/assets/estrellas/verde.png'
  // Añade más URLs de imágenes según sea necesario
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
        <img src={imageUrls[index % imageUrls.length]} alt={star.name} style={styles.starImage} />

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
          <img src={imageUrls[stars.findIndex(star => star.id === selectedStar.id) % imageUrls.length]} alt={selectedStar.name} style={styles.detailImage} />

          <p>ID: {selectedStar.id}</p>
          <p>DESCRIPCIÓN: Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus aliquam accumsan lacus ornare nulla dignissim, vitae iaculis mus aptent nullam condimentum. {selectedStar.description}</p>
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