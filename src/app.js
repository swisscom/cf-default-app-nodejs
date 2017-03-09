"use strict";

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const HTTPStatus = require("http-status");

const routes = require("./routes/index");

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");

    err.status = HTTPStatus["Not Found"];

    next(err);
});

// Error handlers

// Development error handler
// Will print stacktrace
if (app.get("env") === "development") {
    app.use((err, req, res) => {
        res.status(err.status || HTTPStatus["Internal Server Error"]);
        res.render("error", {
            message: err.message,
            error: err,
        });
    });
}

// Production error handler
// No stacktraces leaked to user
app.use((err, req, res) => {
    res.status(err.status || HTTPStatus["Internal Server Error"]);
    res.render("error", {
        message: err.message,
        error: {},
    });
});


module.exports = app;
