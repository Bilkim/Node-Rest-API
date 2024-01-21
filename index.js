const express = require("express");
const cors = require("cors");
const db = require("./config/config");
// const colors = require("colors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const accountRoutes = require("./routes/accountRoute");
const cardRoutes = require("./routes/cardRoute");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// application/json
app.use(express.json());

//uri
app.use(express.urlencoded({
    extended: true
}));

// Router
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Loop DFS banking solutions"})
});

// Port - listen to requests
const PORT = process.env.PORT || 3000;

// database setting
db.sync()
  .then(() => {
    console.log("Generate Table");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
      console.log(`http://localhost:${PORT}`)
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });

//Creating Routes
app.use("/api/accounts", accountRoutes);
app.use("/api/cards", cardRoutes);

// Error handler middleware
app.use(errorHandler);

// Swagger Config
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Loop DFS API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app