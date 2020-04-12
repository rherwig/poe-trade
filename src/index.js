"use strict";
exports.__esModule = true;
var path_1 = require("path");
var node_tail_1 = require("node-tail");
var POE_GAME_PATH = path_1.resolve('M:\\', 'Games', 'PoE');
var POE_LOGS_PATH = path_1.resolve(POE_GAME_PATH, 'logs');
var POE_CLIENT_LOG_PATH = path_1.resolve(POE_LOGS_PATH, 'Client.txt');
var tail = new node_tail_1.Tail(POE_CLIENT_LOG_PATH);
