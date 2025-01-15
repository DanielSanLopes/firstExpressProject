import chalk from "chalk"
import express from "express"
import routes from "./routes/routes.js"
import path, {}  from "path"


const basePath = path.resolve()
const templatesPath = path.join(basePath, "templates")


const app = express()
const port = 5000


app.use("/", routes)



app.use((req, res)=>{
    res.sendFile(`${templatesPath}/404.html`)
})

app.listen(port, ()=>{
    console.log(chalk.bgGreen.white(`Server running on port ${port}`))
})

