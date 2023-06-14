const express = require('express');
const port = 3002

module.exports = { app: express(), express: express, port, router: express.Router() };