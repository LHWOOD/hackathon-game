const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// //testing
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// //testing

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`LHWOOD & nbrailsford, your server is now listening on ${PORT}`)
  );
});
