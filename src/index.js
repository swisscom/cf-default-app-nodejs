"use strict";

/**
 * Module dependencies.
 */

const app = require("../src/app");
const debug = require("debug")("cf-default-app-nodejs:server");
const http = require("http");

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000");

app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 * @param {string|number} val The port to normalize
 * @returns {number|boolean} The normalized port
 */
function normalizePort(val) {
    const intPort = parseInt(val, 10);

    if (isNaN(intPort)) {
    // Named pipe
        return val;
    }

    if (intPort >= 0) {
    // Port number
        return intPort;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param {Object} error The error to be hanled
 * @returns {void}
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string"
    ? `Pipe ${port}`
    : `Port ${port}`;

  // Handle specific listen errors with friendly messages
    switch (error.code) {
    case "EACCES":
        throw new Error(`${bind} requires elevated privileges`);
    case "EADDRINUSE":
        throw new Error(`${bind} is already in use`);
    default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 * @returns {void}
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
    ? `pipe ${addr}`
    : `port ${addr.port}`;

    debug(`Listening on ${bind}`);
}
