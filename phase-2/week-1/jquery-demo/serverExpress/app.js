const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get("/test", (req,res) => res.send("asdasd"))

app.listen(3000, () => console.log(`listening on port 3000`))