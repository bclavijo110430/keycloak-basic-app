const express = require("express");
const session = require("express-session");
const Keycloak = require("keycloak-connect");

const app = express();

const port = process.env.PORT || 5000;

// Configuración de express-session y Keycloak
const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: process.env.SESSION_SECRET || "change_this_secret", 
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

//configuracion keycloak
const keycloakConfig = {
  "realm": process.env.KEYCLOAK_REALM || "nodeapp",
  "auth-server-url": process.env.KEYCLOAK_URL || "http://localhost:8083",
  "ssl-required": "none",
  "resource": process.env.KEYCLOAK_CLIENTNAME  || "nodeappclient",
  "public-client": false,
  "confidential-port": 0,
  "credentials": { 
    "secret": process.env.KEYCLOAK_SECRET || "client_secret_de_keycloak"
  }
};
const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

app.use(keycloak.middleware());

// Ejemplo de ruta protegida
app.get("/v1/api/login", keycloak.protect(), (req, res) => {
  return res.status(200).send({
    message: "user authenticated !!",
  });
});
// Ruta de home
app.get("/v1/api/home", (req, res) => {
  return res.status(200).send({
    message: "Bienvendio equipo detoditoOPS :) !",
  });
});
// Ruta de health check
app.get("/v1/api/health", (req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});
app.listen(port, () => {
  console.log("Listening on " + port);
});

module.exports = app;
