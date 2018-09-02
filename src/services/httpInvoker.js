import axios from 'axios';
import config from '../config';

let invokers = {};

class HttpInvoker {
  constructor (config) {
    this.config = config;
    
    this._instance = axios.create({
      baseURL: config.baseUrl,
      responseType: 'json'
    });
  }
  
  get (url, params) {
    if (!url) {
      return new Promise(resolve => resolve());
    }
    
    return this._instance.get(url, { params })
    .then(res => {
      if (res.data) {
        return res.data;
      }
      
      return [];
    })
    .catch(err => {
      return new Promise((_, reject) => reject(err) );
    });
  }
}

function initInvoker (name) {
  invokers[name] = new HttpInvoker(config.get(name));
  return invokers[name];
}

function getHttpInvoker (name = 'firebase') {
  return invokers[name] || initInvoker(name);
}

module.exports = {
  getHttpInvoker
};
