const express = require("express")
const app = express()

app.listen(5000, () => {
    console.log("server working at http://localhost:5000")
})

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname})
})
app.get("/blog", (req, res) => {
    res.sendFile("./views/blog.html", {root: __dirname})
})
app.get("/contact", (req, res) => {
    res.sendFile("./views/contact.html", {root: __dirname})
})
//redirect
app.get("/home", (req, res) => {
    res.redirect("/")
})
app.get("/contact-me", (req, res) => {
    res.redirect("/contact")
})
//404
app.use((req, res) => {
    res.status(404)
    res.sendFile("./views/404.html", {root: __dirname})
})