const express = require('express');
const helmet = require('helmet');
const Raven = require('raven');
const bodyParser = require('body-parser');
const config = require('../config');
const admin = require('firebase-admin');

const serviceAccount = require('../config/middleware-8f008-firebase-adminsdk-rptti-606b99ae72');

// Initialize Firebase Application
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.get('firebase.databaseURL')
});

const app = new express();

let sentryEnabled = false;

if (config.get('reporting.sentry.dsn')) {
  sentryEnabled = true;
  Raven.config(config.get('reporting.sentry.dsn')).install();
}

// ==================
//   Middleware
// ==================
if (sentryEnabled) {
  // Note: Must be first middleware registered
  app.use(Raven.requestHandler());
}

app.use(helmet());
app.use(bodyParser.json());

if (sentryEnabled) {
  // Note: Must be last middleware registered
  app.use(Raven.errorHandler());
}

// ==================
//   Routers
// ==================

// API Routes
app.use('/api', require('../routes'));

module.exports = app;
