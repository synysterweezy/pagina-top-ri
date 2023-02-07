const express = require("express");
const router = require("./config/routes");
const sass = require('node-sass-middleware');
//const fs = require("fs");

const app = express();

const handlebars = require('express-handlebars');
const { search } = require("./config/routes");
/*app.get('/results', req, res) =>{
  const searchTerm = req.query.q;
  res.render('results', {})
}
*/
app.engine("handlebars", handlebars.engine({
    layoutsDir: `${__dirname}/views`,
    defaultLayout: 'main',
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

/*app.get("/search/:query", async (req, res) => {
    try {
      const library = await fs.promises.readFile("library.json", "utf-8");
      const documents = JSON.parse(library);
      const results = documents.filter(
        document => document.title.includes(req.params.query)
      );
      res.json(results);
    } catch (error) {
      res.status(500).send({ error: "Não encontrou a biblioteca" });
    }
  }); */


  app.get('/json-to-html', (req, res)=>{
    const jsonData = [
      {filename:''}
    ];
    res.render('json-to-html', {data: jsonData})
  })


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);


app.get('/', function(req, res){
    res.render('index')
});    

app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css"
}));

app.use("/css", express.static(`${__dirname}/public/css`));

app.use(router);
app.listen(4444, () => {
console.log("Express app iniciada na porta 4444.");
});



