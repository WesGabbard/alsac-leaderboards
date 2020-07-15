import axios from 'axios'

export const client = axios.create({
  baseURL: `${process.env.BASE_URL}/site`,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})

export const defaultParams = {
  v: '1.0',
  response_format: 'json',
  api_key: 'alsacdev'
}
