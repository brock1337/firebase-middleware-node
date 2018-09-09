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
  
  /**
   * Make GET request via Axios
   *
   * @param url
   * @param params
   * @return {*}
   */
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
  
  // TODO: post method handling. Axios defaults to GET if none provided
}

/**
 * Initialize HTTP Invoker
 *
 * @param name
 * @return {*}
 */
function initInvoker (name) {
  invokers[name] = new HttpInvoker(config.get(name));
  return invokers[name];
}

/**
 * Returns current instance of HTTP Invoker or creates a new one
 *
 * @param name
 * @return {*}
 */
function getHttpInvoker (name = 'firebase') {
  return invokers[name] || initInvoker(name);
}

module.exports = {
  getHttpInvoker
};
