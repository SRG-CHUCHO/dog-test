const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname, './build')))
const PORT = process.env.PORT | 3000
app.get()
app.listen(PORT, () => {
    console.log(`3000 server started`);
  });