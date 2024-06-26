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

export async function adoptStar(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/star/adopt/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), 
      },
    });

    const text = await response.text(); 
    console.log("Respuesta del servidor:", text); 

    try {
      const json = JSON.parse(text);
      return json;
    } catch (e) {
      console.error("Respuesta no es un JSON válido:", e);
      return { success: false, message: "Respuesta no es un JSON válido" };
    }
  } catch (error) {
    console.error("Error al adoptar la estrella:", error);
    return { success: false, message: "Error en la solicitud" };
    }
}

export default {
    getAllStars,
    addLike,
    adoptStar
};