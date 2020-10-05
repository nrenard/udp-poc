import 'dotenv/config';
import express from 'express';

import UDPConfig from './config/UDPServer';

import modules from './modules';

const server = express();

const UDPServer = UDPConfig();

modules(UDPServer);

export default server;