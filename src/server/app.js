const express = require('express');
const helmet = require('helmet');
const Raven = require('raven');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const config = require('../config');
const admin = require('firebase-admin');

// Initialize Firebase Application
admin.initializeApp({
  credential: admin.credential.cert(require('../config')),
  databaseURL: config.get('firebase.databaseURL'),
  serviceAccountId: ''
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
