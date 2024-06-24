import api from '.' 

export async function login(loginData) {
  const {data} = await api.post('/auth/login', loginData)
  return data
}

export async function signup(signupData) {
  const response = await api.post('/auth/signup', signupData)
  return response.data
}

export default {
    login,
    signup
};