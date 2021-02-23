const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("public"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "public", "..", "index.html"))
  );
}
app.listen(port, () => {
  console.log("Server is up!");
});
