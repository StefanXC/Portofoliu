import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/despreMine", (req, res) => {
    res.render("despreMine.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.listen(3000, () => {
    console.log(`Server-ul este pornit, port: ${port}.`);
})



