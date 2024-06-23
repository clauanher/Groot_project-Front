import api from "./index"

const getUser = async (userId) => {
    try {
        const{data} = await api.get("/user/profile",{
            headers:{authorization: localStorage.getItem('token')}
        })
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
};

export default {
    getUser
};