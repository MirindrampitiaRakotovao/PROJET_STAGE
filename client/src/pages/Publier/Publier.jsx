import React , { useState, useEffect }from "react";
import './Publier.css';
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import HM from '../img/Logo_Haute_Matsiatra.png';
import photo from '../img/profil.png';
import {BsFillArrowLeftCircleFill, BsFillClockFill, BsFillClipboard2HeartFill, BsFillChatQuoteFill, BsFillBellFill, BsFillHouseFill, BsFillMoonFill, BsFillLightbulbFill, BsFillPlusCircleFill, BsFillGridFill, BsFillLayersFill} from "react-icons/bs";

const Publier = () =>{

    const [plateforme, setIdee] = useState({
        IdIdee: "",
        Categorie: "",
        But: "",
        Corps: ""
      });
    
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!plateforme.IdIdee || !plateforme.Categorie || !plateforme.But || !plateforme.Corps) {
          toast.error("S'il vous plaît, entrez des valeurs dans les champs");
        } else {
          axios
            .post("http://localhost:5000/api/idee", plateforme)
            .then(() => {
              setIdee({
                IdIdee: "",
                Categorie: "",
                But: "",
                Corps: ""
              });
              toast.success("Utilisateur ajouté avec succès");
              navigate("/publier");
            })
            .catch((error) => {
              console.log(error);
              toast.error("Erreur lors de l'ajout de l'utilisateur.");
            });
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIdee((prevState) => ({ ...prevState, [name]: value }));
      };

    const [date, setDate] = useState(new Date());
    
   const onChange = date => {
    setDate(date);
   };

    return(
        <div className="publier">
            <div className="nav">
                <div className="logo-name">
                    <div className="logo-image">
                        <img className="logo-haute-matsiatra" alt="Logo haute matsiatra" src={HM} />
                    </div>

                    <span className="logo_name"> Region Haute Matsiatra </span>
                </div>

                <div className="menu-items">
                    <ul className="nav-links">
                        <li> 
                            <a href="/dashboard">
                                <BsFillHouseFill className="uil uil-estate"/>
                                <span className="link-name"> Accueil </span>
                            </a>
                        </li>

                        <li> 
                            <a href="/publier" >
                                <BsFillPlusCircleFill className="uil uil-estate"/>
                                <span className="link-name"> Publier mon idee </span>
                            </a>
                        </li>

                        <li> 
                            <a href="/idees">
                                <BsFillLightbulbFill className="uil uil-estate"/>
                                <span className="link-name"> Mes idees </span>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout-mode">
                    <li> 
                            <a href="/">
                                <BsFillArrowLeftCircleFill className="uil uil-estate"/>
                                <span className="link-name"> Deconnexion </span>
                            </a>
                        </li>

                        <li className="mode"> 
                            <a href="#">
                                <BsFillMoonFill className="uil uil-estate"/>
                                <span className="link-named"> Theme </span>
                            </a>
                            <div className="mode-toggle" >
                                <span className="switch" ></span>
                            </div>
                        </li> 
                    </ul>
                </div>
            </div>

            <div className="publication-content">
                <div className="top">
                    <BsFillGridFill className="uil uil-bar sidebar-toggle"/>

                    <h5 className="admin"> 
                        Mirindrampitia Rakotovao <br/>
                        <span className="mirindra"> @admin </span>
                    </h5>

                    <img src={photo} alt="photo de profil" />
                </div>

            `   <div className="corps">
                    <div className="gros titre">
                        <h1 className="titre"> Publication </h1>
                    </div>

                    <div className="publication">
                        <div className="categorie">
                            <h4 className="selection"> But de la publication </h4>
                            <input type="text" className="selectionner" onChange={handleInputChange} />
                        </div>

                        <div className="but">
                            <h4 className="buttitre"> Séléctionner une catégorie </h4>
                            <select
                                id="etat"
                                name="etat"
                                value={plateforme.Categorie}
                                onChange={handleInputChange}
                                >
                                <option value="Bon">Amélioration des infrastructures</option>
                                <option value="Mauvais">Jeunesse et Sport</option>
                                <option value="Abîmé">Politique</option>
                            </select>
                        </div>

                        <div className="contenus">
                            <h4 className="contenu"> Contenu de la publication </h4>
                            <textarea name="" id="" cols="30" rows="10" className="container" onChange={handleInputChange}></textarea>
                        </div>

                        <button className="go"> Publier </button>

                        <div className="commentaires">
                            <h4 className="commentaire"> Commentaires </h4>
                            <textarea name="" id="" cols="30" rows="10" className="containercommentaires" onChange={handleInputChange}></textarea>
                        </div>

                        <button className="gos"> Commenter </button>
                    </div>
                </div>`
            </div>
            
            <div className="calendar">
                <Calendar className="calendars" onChange={onChange} value={date}/>
            </div>

            <div className="notifications">
                <div className="title">
                    <span className="texts"> Notifications </span>
                </div>

                <div className="notifications-datas">
                    <div className="notifications-1">
                        <span className="data-title"> Rakoto a aime votre idee </span> 
                    </div>

                    <br/>

                    <div className="notifications-2">
                        <span className="data-title"> Rasoa a aime votre idee </span> 
                    </div>
                    
                    <br/>
                    
                    <div className="notifications-3">
                        <span className="data-title"> Votre idee a ete bien recue </span> 
                    </div>

                    <br/>

                    <div className="notifications-4">
                        <span className="data-title"> Restez connectes pour des MAJ</span> 
                    </div>

                    <br/>
                    
                    <div className="notifications-5">
                        <span className="data-title"> Vos informations sont incompletes </span> 
                    </div>
                </div>

                
            </div>

        </div>
    );
};
export default Publier;