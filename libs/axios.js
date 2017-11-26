import axios from 'axios'

let instance = axios.create({
  baseURL: `https://ywc15.ywc.in.th/api/interview`
})

export default instance
