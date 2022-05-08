const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 8000;
require("dotenv").config();

// Error Handlers
const { handle404, handleErrors } = require("./api/middlewares/errorHandler");

// MongoDB
const connectMongoDB = require("./config/db");
connectMongoDB();

app.use(morgan("dev"));
// Enables JSON Parse
app.use(express.json());

// Enables URL Parameter Requests
app.use(express.urlencoded({ extended: true }));

// Routes

// 404 Error Handler
app.use(handle404);

// Global Error Handler
app.use(handleErrors);

app.listen(PORT, () => {
 console.log(`Server Running at ${PORT}`);
});
