import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from server 2!")
})

app.listen(process.env.SERVER_PORT2, ()=> {
  console.log(`Express listening on port ${process.env.SERVER_PORT2}`)
})