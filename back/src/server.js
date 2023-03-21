const express = require("express");
const app = express();
const path = require("path");
const db = require("./database/db");
const cors = require('cors');

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const routes = require("./routes/routes");


app.use(cors(corsOptions))
app.use(express.json());

app.use(express.static(path.join(__dirname + "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use("/", routes);

db.sync().then(() => { console.log("A conexão com o banco de dados foi um sucesso.") }).catch((error) => console.log(error));

const port = 3001 || 3333;
app.listen(port, () => {
    console.log("Rodando na porta: " + port);
});


module.exports = app;