const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000;
const loginrouter = require("./routes/loginrouter")
app.use("/api/auth", loginrouter)
app.listen(PORT, () => {
    console.log("ecommerce server running")
})