import  { useState, useEffect } from 'react';
import userService from '../../services/userService'; // Asegúrate de la ruta correcta

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
        <div>
            {user ? (
                <div>
                    <p>Nombre: {user.result.username}</p>
                    <p>Email: {user.result.email}</p>
                     <p>Tipo de suscripción: {user.result.suscriptiontype}</p>
                </div>
            ) : (
                <div>No user data found</div>
            )}
        </div>
    );
};

export default UserView;
