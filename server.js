const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("morgan");

require("dotenv").config();

// Middleware
app.use(logger("dev"));
app.use(cors());

// Routes
app.get("/api", (req, res, next) => {
    return res.send({ status: 1, message: "Server is OK!" });
});

// 404
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

// Handle error
app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status || 500;

    return res.status(status).json({
        error: {
            message: error.message,
        },
    });
});

// Start server
const { PORT } = process.env;
const port = PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});
