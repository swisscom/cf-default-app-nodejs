"use strict";

const http = require("http");
const path = require("path");
const express = require("express");

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        envVariables: process.env,
        reqHeaders: req.headers,
        reqParams: req.query,
    });
});

app.use("/public", express.static(path.join(__dirname, "public")));

const port = process.env.PORT || "3000";
app.set("port", port);

http.createServer(app).listen(port);
