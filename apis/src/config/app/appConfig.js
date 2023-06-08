const express = require('express');
const cors = require('cors');
const port = 3002

module.exports = { app: express(), express: express, cors: cors(), port, router: express.Router() };