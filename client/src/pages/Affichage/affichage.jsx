import React , { useState, useEffect }from "react";
import './affichage.css';
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import HM from '../img/Logo_Haute_Matsiatra.png';
import photo from '../img/profil.png';
import {BsFillArrowLeftCircleFill, BsFillClockFill, BsFillClipboard2HeartFill, BsFillChatQuoteFill, BsFillBellFill, BsFillHouseFill, BsFillMoonFill, BsFillLightbulbFill, BsFillPlusCircleFill, BsFillGridFill, BsFillLayersFill} from "react-icons/bs";

const Affichage = () =>{

    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date);
    }

    return(
        <div className="afficher">
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

            <div className="affichage-content">
            <div className="top">
                    <BsFillGridFill className="uil uil-bar sidebar-toggle"/>

                    <h5 className="admin"> 
                        Mirindrampitia Rakotovao <br/>
                        <span className="mirindra"> @admin </span>
                    </h5>

                    <img src={photo} alt="photo de profil" />
                </div>
            </div>

            <br/>
            
            <div className="corps">
                    <div className="gros titre">
                        <h1 className="titres"> Affichage de mon idée </h1>
                    </div>

                    <div className="publication">
                        <div className="categorie">
                            <h4 className="selection"> But de la publication </h4>
                            <input type="text" className="selectionner" />
                        </div>

                        <div className="but">
                            <h4 className="buttitre"> Selectionnez une catégorie </h4>
                            <textarea type="text" className="butpub" />
                        </div>

                        {/* <div className="monidee">
                            <h4 className="idee"> Votre idee </h4>
                            <textarea name="" id="" cols="30" rows="10" className="ideecontainer"></textarea>
                        </div> */}

                        <div className="contenus">
                            <h4 className="contenu"> Contenu de la publication </h4>
                            <textarea name="" id="" cols="30" rows="10" className="container"></textarea>
                        </div>

                        <button className="go"> Modifier </button>

                    </div>

                    <div className="calendrierssss">
                        <Calendar className="calendarssss" onChange={onChange} value={date}/>
                    </div>

                    <div className="notifications">
                <div className="title">
                    <span className="textsss"> Notifications </span>
                </div>

                <div className="notificationsss-datasss">
                    <div className="notificationsss-1">
                        <span className="data-title"> Rakoto a aime votre idee </span> 
                    </div>

                    <br/>

                    <div className="notificationsss-2">
                        <span className="data-title"> Rasoa a aime votre idee </span> 
                    </div>
                    
                    <br/>
                    
                    <div className="notificationsss-3">
                        <span className="data-title"> Votre idee a ete bien recue </span> 
                    </div>

                    <br/>

                    <div className="notificationsss-4">
                        <span className="data-title"> Restez connectes pour des MAJ</span> 
                    </div>

                    <br/>
                    
                    <div className="notificationsss-5">
                        <span className="data-title"> Vos informations sont incompletes </span> 
                    </div>
                </div>

                
            </div>
                </div>
        </div>
    );
};

export default Affichage;