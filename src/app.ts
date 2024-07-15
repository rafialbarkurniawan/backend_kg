// app.ts

import express from "express";
import dotenv from "dotenv";
import routes from "./routes";

const app = express();

// Load evironment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

export default app;