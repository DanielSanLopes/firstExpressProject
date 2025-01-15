import express, { Router } from "express";
import path, {}  from "path"



const router = Router()

const basePath = path.resolve()
const templatesPath = path.join(basePath, "templates")
console.log(basePath)


router.use(express.static(`${basePath}/public`))


router.get('/contato', (req, res)=>{
    res.sendFile(`${templatesPath}/contato.html`)
})

router.get('/index', (req, res)=>{
    res.sendFile(`${templatesPath}/index.html`)
})


router.get('/', (req, res)=>{
    res.sendFile(`${templatesPath}/index.html`)
})



export default router