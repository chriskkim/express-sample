const express = require('express')
const app = express();
const port = 8000;

app.set("view engine", "pug");
app.set("views", __dirname);

app.get('/', (req, res) => {
    res.render("template", {heading: "Welcome", content: "John Doe is a Toronto-based creative.", label: "Contact", url: "/contact"});
});

app.get('/contact', (req, res) => {
    res.render("template", {heading: "Contact John Doe", content: "You may reach him at...", label: "Email", url: "mailto:john@doe.com"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});