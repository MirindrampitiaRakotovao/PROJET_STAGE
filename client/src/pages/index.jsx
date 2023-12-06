import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import HM from '../pages/img/Logo_Haute_Matsiatra.png';
import illustration from '../pages/img/illustration.png';
import vector from '../pages/img/Vector 1.png';
import "./style.css";

const Accueil = () => {
  const [plateforme, setUser] = useState({
    IdUser: "",
    Mdp: ""
  });

  const [showWelcomeText, setShowWelcomeText] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Ajout de l'état pour la case à cocher
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!plateforme.IdUser || !plateforme.Mdp) {
      toast.error("S'il vous plaît, entrez votre identifiant ainsi que votre mot de passe");
    } else {
      axios
        .post("http://localhost:5000/api/index", plateforme)
        .then(() => {
          setUser({
            IdUser: "",
            Mdp: ""
          });
          toast.success("Connexion réussie");
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Identifiant ou mot de passe incorrect");
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  useEffect(() => {
    const welcomeText = "Bienvenue sur votre plateforme !";

    const animateText = async () => {
      while (true) {
        for (let i = 0; i < welcomeText.length; i++) {
          setShowWelcomeText(welcomeText.substring(0, i + 1));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        for (let i = welcomeText.length; i >= 0; i--) {
          setShowWelcomeText(welcomeText.substring(0, i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    animateText();
  }, []);

  return (
    <div className="accueil">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">
            {showWelcomeText}
          </div>

          <form onSubmit={handleSubmit} className="form">
            <h1> SE CONNECTER </h1>
            <div className="contenu">
              <div className="user">
                <label htmlFor="IdUser" className="IdUser">
                  Adresse Email :{" "}
                </label>
                

                <input
                  type="text"
                  className="email"
                  id="IdUser"
                  value={plateforme.IdUser}
                  name="IdUser"
                  placeholder="Entrez votre identifiant...."
                  onChange={handleInputChange}
                />

              </div>

              <br />

              <div className="motdepasse">
                <label htmlFor="Mdp" className="Mdp">
                  Mot de passe :{" "}
                </label>
                
                <input
                  type="password"
                  className="mdp"
                  id="Mdp"
                  value={plateforme.Mdp}
                  name="Mdp"
                  placeholder="Entrez votre mot de passe ...."
                  onChange={handleInputChange}
                />

              </div>

              <br />
              

              <input type="submit" value="Connexion" className="connexion"/>

              <br/>

              <Link to="/signup">
                <button className="request">
                  Inscription
                </button>
              </Link>

            </div>
          <img className="element" alt="Element" src={illustration} /> 
          </form>


          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-4">Region Haute Matsiatra</div>
              <img
                className="logo-haute-matsiatra"
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

export default Accueil;

