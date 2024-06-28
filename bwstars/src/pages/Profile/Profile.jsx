import React, { useState, useEffect } from 'react';
import userService from '../../services/userService'; 

const UserView = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={styles.profileContainer}>
            <div style={styles.userContainer}>
                {user && (
                    <div>
                        <h1 style={styles.header}>PERFIL DE USUARIO</h1>
                        <p style={styles.text}>NOMBRE: {user.username}</p>
                        <p style={styles.text}>EMAIL: {user.email}</p>
                        <p style={styles.text}>TIPO DE SUSCRIPCIÓN: {user.suscriptiontype}</p>
                    </div>
                )}
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionHeader}>FAVORITAS</h2>
                {user.stars && user.stars.map((star, index) => (
                    <div key={index} style={styles.card}>
                        {star.name}
                        <p>Tipo: {star.type}</p>
                    </div>
                ))}
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionHeader}>MIS ESTRELLAS ADOPTADAS</h2>
                {user.stars && user.stars.map((star, index) => (
                    <div key={index} style={styles.card}>
                        {star.name}
                    </div>
                ))}
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionHeader}>MIS CONSTELACIONES</h2>
                <div style={styles.card}>EL MUNDO DE GROOT</div>
                <div style={styles.card}>THE MILKY WAY</div>
                <div style={styles.card}>ASGARD</div>
            </div>
        </div>
    );
};

const styles = {
    profileContainer: {
       padding: '20px',
        backgroundColor: 'rgb(9, 12, 91)',
        fontFamily: 'Arial Black, sans-serif', // Añade la fuente deseada
        color: 'white'
    },
    userContainer: {
        border: '4px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '600px',
        margin: '50px auto',
        backgroundColor: 'rgb(130, 133, 234)',
       
        
    },
    header: {
        fontSize: '2.3em',
        marginBottom: '5px',
        color: 'rgb(215, 240, 10)',
        fontFamily: 'Arial Black, sans- serif',

    },
    text: {
        margin: '5px 0',
        fontSize: '1em',
        color: 'WHITE',
        fontFamily: 'Arial Black'
    },
    section: {
        border: '4px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: 'rgb(130, 133, 234)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: 'rgb(215, 240, 103)',
        fontFamily: 'Arial Black, sans- serif'
    },
    sectionHeader: {
        fontSize: '1.5 em',
        marginBottom: '10px',
        backgroundColor: 'rgb(130, 133, 234)'
    },
    card: {
        
        borderRadius: '4px',
        padding: '10px',
        margin: '5px 0',
        color:'WHITE',
        fontSize: '1em',
        backgroundColor: 'rgb(220, 130, 225)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

export default UserView;
