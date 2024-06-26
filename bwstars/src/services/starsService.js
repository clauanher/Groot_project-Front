import api from ".";

export const getAllStars = async() => {
    try {
        const{data} = await api.get("/star",{
            headers:{authorization: localStorage.getItem('token')}
        })
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const addLike = async(starId) => {
    try {
        const response = await api.get(`/stars/${starId}/like`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding like to star:', error);
        throw error;
    }
};

export default {
    getAllStars,
    addLike,
};