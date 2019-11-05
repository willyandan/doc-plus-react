const axios = require('axios')
const API_URI = `http://192.168.56.1:3000`
const post = async (path, data, config) => {
  return axios.post(`${API_URI}${path}`,data,config)
}

const get = async (path, config) => {
  return axios.get(`${API_URI}${path}`, config)
}

const viaCep = async(cep) =>{
  console.log(`https://viacep.com.br/ws/${cep}/json/`)
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

module.exports = {
  post,
  get,
  viaCep
}