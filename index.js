const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.disable("x-powered-by");
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
