const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "plateforme"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get("/api/parametres/:IdUser", (req, res) => {
  const { IdUser } = req.params;
  console.log("IdUser:", IdUser); // Ajoutez cette ligne pour le débogage
  const sqlGet = "SELECT * FROM utilisateur WHERE IdUser = ?";
  db.query(sqlGet, IdUser, (error, result) => {
      if (error) {
          console.log("error", error);
          res.status(500).send("Une erreur s'est produite lors de la récupération des données.");
      } else {
          res.send(result);
      }
  });
});

  
  
app.put("/api/update/:IdUser", (req, res) => {
     const { IdUser } = req.params;
     const { Nom, Prenom, Mdp } = req.body;
     const sqlUpdate =
       "UPDATE utilisateur SET Nom = ?, etat = ?, Prenom = ?, , Mdp = ? WHERE IdUser = ?";
     db.query(
       sqlUpdate,
       [Nom, Prenom, Mdp, IdUser],
       (error, result) => {
         if (error) {
           console.log("error", error);
           res
             .status(500)
             .send("Une erreur s'est produite lors de la modification des données.");
         } else {
           res.send(result);
         }
       }
     );
});



app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM utilisateur";
    db.query(sqlGet, (error, result) => {
      if (error) {
        console.log("error", error);
        res.status(500).send("Une erreur s'est produite lors de la récupération des données.");
      } else {
        res.send(result);
      }
    });
});


app.post("/api/index", (req, res) => {
    const {IdUser, Mdp} = req.body;

    const auth = "SELECT * FROM utilisateur WHERE IdUser = ? AND Mdp = ?";

    db.query(auth, [IdUser, Mdp], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send("Erreur de connexion!");
        } else {
            if (result.length > 0) {
                res.json({ success: true});
            } else {
                res.status(401).json({ error: "Identifiant ou mot de passe incorrects"});
            }
        }
    });
});

app.post("/api/post", (req, res) => {
    const {Nom, Prenom, IdUser, Mdp} = req.body;
    const sqlInsert = "INSERT INTO utilisateur (Nom, Prenom, IdUser, Mdp) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [Nom, Prenom, IdUser, Mdp], (error, result) => {
        if(error) {
            console.log(error); 
            res.status(500).send("Une erreur s'est produite lors de l'inscription");
        } else{
            res.send("Inscription reussie");
        }
    });
});

app.post("/api/idee", (req, res) => {
  const {Categorie, But, Corps} = req.body;
  const sqlInsert = "INSERT INTO idee (Categorie, But, Corps) VALUES (?, ?, ?, ?)";
  db.query(sqlInsert, [Nom, Prenom, IdUser, Mdp], (error, result) => {
      if(error) {
          console.log(error); 
          res.status(500).send("Une erreur s'est produite lors de l'ajout de l'idée'");
      } else{
          res.send("Ajout réussi");
      }
  });
});

// app.get("/", (req, res)  => {
//     const sqlInsert = "INSERT INTO utilisateur (IdUser, Nom, Prenom, Mdp) VALUES ('ID003', 'FIRINGA', 'Tay', 'tay')";
//     db.query(sqlInsert, (error, result) => {
//         console.log("error", error);
//         console.log("result", result);
//         res.send("Hello Express");
//     });
// });


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})