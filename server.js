const express = require("express")
const jsonServer = require("json-server")

const app = express()
const router = jsonServer.router("db.json")
const db = router.db

app.use("/api", router)
app.listen(4000, () => console.log("api is running on 4000"))