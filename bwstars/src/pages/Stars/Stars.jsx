
import { useEffect, useState } from 'react'
import { getAllStars, adoptStar, addLike } from "../../services/starsService";

function Stars() {
  const [stars, setStars] = useState([])
  const [selectedStar, setSelectedStar] = useState(null)

  async function displayStars() {
    const result = await getAllStars()
    setStars(result.result)
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
    return stars.map((star) => (
      <div
        key={star.id}
        style={styles.starCard}
        onClick={() => setSelectedStar(star)}
      >
        <h3 style={styles.starName}>{star.name}</h3>
        <img src={star.imageUrl} alt={star.name} style={styles.starImage} />
        <button onClick={() => handleAdopt(star.id)} disabled={star.adopted}>
          {star.adopted ? "Adoptada" : "Adoptar"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLike(star.id);
          }}
        >
          👍 {star.likes}
        </button>
      </div>
    ));
  };

    useEffect(() => {
    displayStars()
  }, [])

  return (
    <div style={styles.container}>
      <section style={styles.descriptionSection}>
        <h1>Welcome to the Stars Page</h1>
        <p>This page displays a collection of stars. Click on any star to see more details about it.</p>
      </section>
      <section style={styles.cardsSection}>
        {showStars()}
      </section>
      {selectedStar && (
        <div style={styles.detailCard}>
          <h2>{selectedStar.name}</h2>
          <img src={selectedStar.imageUrl} alt={selectedStar.name} style={styles.detailImage} />
          <p>ID: {selectedStar.id}</p>
          <p>Description: {selectedStar.description}</p>
          <button onClick={() => setSelectedStar(null)} style={styles.closeButton}>Close</button>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  descriptionSection: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  starCard: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '150px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  starCardHover: {
    transform: 'scale(1.05)',
  },
  starName: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  starImage: {
    width: '100%',
    borderRadius: '5px',
  },
  detailCard: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  detailImage: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  closeButton: {
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

export default Stars