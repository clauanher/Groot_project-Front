import { useState } from 'react';

function Constellations() {
  const [showForm, setShowForm] = useState(false);
  const [selectedConstellation, setSelectedConstellation] = useState(null);

  const constellations = [
    { name: 'Orion', info: 'Orion es una constelación prominente...' },
    { name: 'Cassiopeia', info: 'Cassiopeia es fácilmente reconocible...' },
  ];

  return (
    <div className="constellations-container">
      <h1>Explora y crea tus propias constelaciones</h1>
      <div className="card create-card" onClick={() => setShowForm(true)}>
        Crea tu constelación
      </div>
      {showForm && (
        <div className="form-container">
          <form>
            <label>
              Nombre de la constelación:
              <input type="text" name="name" />
            </label>
            <label>
              Descripción:
              <textarea name="description"></textarea>
            </label>
            <button type="submit">Crear</button>
          </form>
        </div>
      )}
      <div className="constellations-list">
        {constellations.map((constellation, index) => (
          <div 
            key={index} 
            className="card constellation-card" 
            onClick={() => setSelectedConstellation(constellation)}
          >
            {constellation.name}
          </div>
        ))}
      </div>
      {selectedConstellation && (
        <div className="info-container">
          <h2>{selectedConstellation.name}</h2>
          <p>{selectedConstellation.info}</p>
          <button onClick={() => setSelectedConstellation(null)}>Cerrar</button>
        </div>
      )}
      <style jsx>{`
        .constellations-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .card {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 20px;
          margin: 10px;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .card:hover {
          background-color: #e0e0e0;
        }

        .create-card {
          background-color: #add8e6;
        }

        .form-container {
          margin: 20px 0;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 10px;
        }

        input, textarea {
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px;
          margin-top: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #45a049;
        }

        .constellations-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .info-container {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .info-container button {
          margin-top: 10px;
          background-color: #ff6347;
        }

        .info-container button:hover {
          background-color: #ff4500;
        }
      `}</style>
    </div>
  );
}

export default Constellations;
