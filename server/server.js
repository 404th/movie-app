const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
require("dotenv").config({ path: path.join( __dirname, ".env" ) })

// middlewares
app.use( cors() )
app.use( express.json() )

// routes


// listening PORT
const { PORT } = process.env || 5000
app.listen( process.env.PORT, () => console.log(`Server is accomplished on PORT:${ PORT }`) )