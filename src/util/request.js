import axios from 'axios'
import Util from './index'

const defaultSettings = {
  type: 'post',
  url: '',
  data: '',
  dataType: 'json',
  timeout: 10000,
  headers: {},
  contentType: 'application/x-www-form-urlencoded',
  withCredentials: false
}

let params = {}
let setHeader = function (key, value) {
  const headers = params.headers
  headers[key] = value
}

function request (options) {
  options = Util.extend(defaultSettings, options)
  params = {
    url: options.url,
    method: options.type,
    data: options.data,
    headers: options.headers,
    responseType: options.dataType,
    withCredentials: options.withCredentials
  }

  const contentType = options.contentType,
    headers = options.headers

  for (let key in headers) {
    setHeader(key, headers[key])
  }

  if (contentType) {
    setHeader('Content-Type', contentType)
  }

  return axios(params)
}

function requestAll () {
  return axios.all([].slice.call(arguments))
}

export {
  request,
  requestAll
}