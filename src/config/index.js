const convict = require('convict');

const config = convict({
  version: 'v1',
  
  env: {
    doc: 'Application environment',
    env: 'NODE_ENV',
    format: ['development'],
    default: 'development'
  },
  
  server: {
    ports: {
      http: {
        doc: 'HTTP Port',
        default: 8080
      }
    }
  },
  
  firebase: {
    apiKey: 'AIzaSyBBS6JSCAlNR7AiEF7j988-ypDCoNJdVms',
    authDomain: 'middleware-8f008.firebaseapp.com',
    databaseURL: 'https://middleware-8f008.firebaseio.com',
    projectId: 'middleware-8f008',
    storageBucket: 'middleware-8f008.appspot.com',
    messagingSenderId: '503508143734'
  },
  
  reporting: {
    sentry: {
      dsn: {
        doc: 'Sentry Client Token (DSN)',
        default: 'https://16a21a1bb0924104875533f9370eabff@sentry.io/1272653'
      }
    }
  }
});

// Load environment dependent configuration file
const env = config.get('env');

// Load into convict
config.loadFile(require('path').resolve(`src/config/${env}.json`));

module.exports = config;
