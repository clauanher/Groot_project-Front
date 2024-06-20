import api from ".";

export const getAllStars = async() => {
    try {
        const{data} = await api.get("/star")
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}