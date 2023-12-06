import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import HM from '../img/Logo_Haute_Matsiatra.png';
import illustration from '../img/illustration.png';
import "./inscription.css";

const Inscription = ()=>{

    const [plateforme, setUser] = useState({
        Nom: "",
        Prenom: "",
        IdUser: "",
        Mdp: ""
      });
    
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!plateforme.Nom || !plateforme.Prenom || !plateforme.IdUser || !plateforme.Mdp) {
          toast.error("S'il vous plaît, entrez des valeurs dans les champs");
        } else {
          axios
            .post("http://localhost:5000/api/post", plateforme)
            .then(() => {
              setUser({
                Nom: "",
                Prenom: "",
                IdUser: "",
                Mdp: ""
              });
              toast.success("Utilisateur ajouté avec succès");
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
              toast.error("Erreur lors de l'ajout de l'utilisateur.");
            });
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
      };
    
    return(
      <div className="accueils">
      <div className="div">
        <div className="overlap">

          <form onSubmit={handleSubmit} >
            <h1 className="s_inscrire"> S'INSCRIRE </h1>
            <div className="contenu">

            <div className="nom">
                <label htmlFor="Nom" className="Nom">
                  Nom :{" "}
                </label>
                

                <input
                  type="text"
                  className="nomm"
                  id="Nom"
                  value={plateforme.Nom}
                  name="Nom"
                  placeholder="Entrez votre nom...."
                  onChange={handleInputChange}
                />

            </div> 

            <br/>

            <div className="prenom">
                <label htmlFor="Prenom" className="Prenom">
                  Prenom :{" "}
                </label>
                

                <input
                  type="text"
                  className="prenomm"
                  id="Prénom"
                  value={plateforme.Prenom}
                  name="Prenom"
                  placeholder="Entrez votre prénom...."
                  onChange={handleInputChange}
                />

            </div> 

              <br/>

              <div className="users">
                <label htmlFor="IdUser" className="IdUsers">
                  Email :{" "}
                </label>
                

                <input
                  type="text"
                  className="mail"
                  id="IdUser"
                  value={plateforme.IdUser}
                  name="IdUser"
                  placeholder="Entrez votre identifiant...."
                  onChange={handleInputChange}
                />

              </div>

              <br />

              <div className="motdepasses">
                <label htmlFor="Mdp" className="Mdps">
                  Mot de passe :{" "}
                </label>
                
                <input
                  type="password"
                  className="mdpp"
                  id="Mdp"
                  value={plateforme.Mdp}
                  name="Mdp"
                  placeholder="Entrez votre mot de passe ...."
                  onChange={handleInputChange}
                />

              </div>

              <br />
              

              <input type="submit" value="Inscription" className="inscription" />
              <br/>
              <Link to="/">
                <button className="requests">
                  Retour
                </button>
              </Link>

            </div>
          {/* <img className="elements" alt="Element" src={illustration} />  */}
          </form>


          <div className="overlap-wrappers">
            <div className="overlap-2">
              <div className="texts-wrapper-4">Region Haute Matsiatra</div>
              <img
                className="logos-haute-matsiatra"
                alt="Logo haute matsiatra"
                src={HM}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Inscription;