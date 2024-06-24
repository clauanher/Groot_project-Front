import React, { useState, useEffect } from 'react';
import userService from '../../services/userService'; 
import starsService from '../../services/starsService';

const UserView = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favoriteStar, setFavoriteStar] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await userService.getUser(userId);
                setUser(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

      useEffect(() => {
        const fetchFavoriteStar = async () => {
            try {
                // Suponiendo que tienes una función en starService para obtener la estrella favorita del usuario
                const starData = await starService.addLike(userId);
                setFavoriteStar(starData);
            } catch (error) {
                console.error('Error fetching favorite star:', error);
                // Manejar el error según sea necesario
            }
        };

        if (user) {
            fetchFavoriteStar();
        }
    }, [userId, user]); // Dependencias: userId y user, para asegurar que se actualice cuando cambien

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div style={styles.userContainer}>
                {user ? (
                    <div>
                        <h1 style={styles.header}>Perfil de Usuario</h1>
                        <p style={styles.text}>Nombre: {user.result.username}</p>
                        <p style={styles.text}>Email: {user.result.email}</p>
                        <p style={styles.text}>Tipo de suscripción: {user.result.suscriptiontype}</p>
                    </div>
                ) : (
                    <div>No se encontraron datos de usuario</div>
                )}
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionHeader}>Favoritas</h2>
                <div style={styles.card}>Favorita 1</div>
                <div style={styles.card}>Favorita 2</div>
                <div style={styles.card}>Favorita 3</div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionHeader}>Mis estrellas adoptadas</h2>
                {/* Aquí puedes agregar cards o elementos para mostrar las estrellas adoptadas */}
                <div style={styles.card}>Estrella 1</div>
                <div style={styles.card}>Estrella 2</div>
                <div style={styles.card}>Estrella 3</div>
            </div>

            {/* Sección de Mis constelaciones */}
            <div style={styles.section}>
                <h2 style={styles.sectionHeader}>Mis constelaciones</h2>
                {/* Aquí puedes agregar cards o elementos para mostrar las constelaciones */}
                <div style={styles.card}>Constelación 1</div>
                <div style={styles.card}>Constelación 2</div>
                <div style={styles.card}>Constelación 3</div>
            </div>
        </div>
    );
};

const styles = {
    userContainer: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: '1.5em',
        marginBottom: '10px',
    },
    text: {
        margin: '5px 0',
        fontSize: '1em',
    },
    section: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    sectionHeader: {
        fontSize: '1.2em',
        marginBottom: '10px',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        margin: '5px 0',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

export default UserView;
