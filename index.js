const express = require('express');
const server = express();
const actionModel = require('./data/helpers/actionModel');
const mappers = require('./data/helpers/mappers');
const projectModel = require('./data/helpers/projectModel');
const cors = require('cors');

server.use(express.json());
server.use(cors());
