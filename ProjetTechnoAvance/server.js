const express       = require('express');// importer le module express
const app           = express();// par la suite on a cree une instance de express qu'on a nome app

const MongoClient   = require('mongodb').MongoClient; // om a importe la methode mongo client qui est dans mongodb
const url           = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser:true}, (err,client) => {
let db = client.db("SUPERVENTES");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function ( req , res , next){
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin" ,'*');
  res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
  res.setHeader("Access-Control-Allow-Headers", '*');
  next();
 });


app.get("/produits", (req, res) => {
    console.log("route: /produits");
    db.collection("produits").find().toArray((err, documents) => {
        res.json(documents);
    })
  })
app.get("/categories", (req, res) => {
    console.log("route: /categories");
    db.collection("produits").distinct("categorie",(err, documents) => {
      res.json(documents);
    })
  })
 // app.get("/categories/types", (req, res) => {
   // console.log("route: /categories/types");
   // db.collection("produits").distinct("type",(err, documents) => {
   //   res.json(documents);
   //})
  //})
  
  app.get("/categories/:categorie", (req, res) => {
    console.log("route: /categories/:categorie");
    db.collection("produits").distinct("type",{"categorie":req.params.categorie},(err, documents) => {
      res.json(documents);
    })
  })
  
  app.get("/categories/:categorie/:type", (req, res) => {
    console.log("route: /categories/:categorie/:type");
    db.collection("produits").find({"type":req.params.type},{"categorie":req.params.categorie}).toArray((err, documents) => {
      res.json(documents);
    })
  })
  // app.get("/search/:categories/:types", (req, res) => {
  //   console.log("route: /search/:categories/:types");
  //   db.produits.find({"categorie" : req.params.categories}
  //     .then(db.produits.find({"type": req.params.types}))
  //     .then(("type","categorie"),(err, documents) => {
  //       res.json(documents);
  //     })
  //   })
  






    app.get("/login", (req, res) => {
    console.log("This is my route: /login");
    db.collection("utilisateurs").find({"email":parseInt(req.params.email)}).toArray((err, documents) => {
      res.end(JSON.stringify(documents));
  })
  })

  app.get("/produits/nom/:nom", (req, res) => {
    console.log("This is my route: /nom");
    db.collection("produits").find({"nom":req.params.nom}).toArray((err, documents) => {
        res.end(JSON.stringify(documents));
    })
  })

  app.get("/produits/prix/:prix", (req, res) => {
    console.log("This is my route: /nom");
    db.collection("produits").find({"prix":parseInt(req.params.prix)}).toArray((err, documents) => {
        res.end(JSON.stringify(documents));
    })
  })
  app.post("/produits", (req, res) => {
    console.log("route: /produits " +JSON.stringify(req.body));
    try {
      db.collection("produits").insertOne(req.body);
      res.end(JSON.stringify({"message" : "Adding is affected."}));
    } catch (error) {
      res.end(JSON.stringify({"message" : "Error on adding produits:  " +error}));
    }
  })


});


console.log("Node is connected.")
app.listen(8888);