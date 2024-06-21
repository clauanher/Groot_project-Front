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