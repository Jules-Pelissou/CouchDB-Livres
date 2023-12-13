const express = require("express");
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const routerApp = require("./router/routerApp");

app.listen(8080, () => {
    console.log("Server started");
});

app.use("/", routerApp)