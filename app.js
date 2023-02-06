const express = require("express");
const router = require("./config/routes");
const sass = require('node-sass-middleware');


const app = express();

const handlebars = require('express-handlebars');
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.get('/', function(req, res) {
    res.render('index', {
    layout: false
    });
    });

app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css"
}));

app.use("/css", express.static(`${__dirname}/public/css`));

app.use(router);
app.listen(3000, () => {
console.log("Express app iniciada na porta 3000.");
});



