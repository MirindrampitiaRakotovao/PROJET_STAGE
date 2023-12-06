import React , { useState, useEffect }from "react";
import './Idees.css';
import Calendar from 'react-calendar';
import { useNavigate , Link} from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import HM from '../img/Logo_Haute_Matsiatra.png';
import photo from '../img/profil.png';
import {BsFillArrowLeftCircleFill, BsFillClockFill, BsFillClipboard2HeartFill, BsFillChatQuoteFill, BsFillBellFill, BsFillHouseFill, BsFillMoonFill, BsFillLightbulbFill, BsFillPlusCircleFill, BsFillGridFill, BsFillLayersFill} from "react-icons/bs";

const MesIdees = () =>{

    const [date, setDate] = useState(new Date());
    
   const onChange = date => {
    setDate(date);
   };

    return(
        <div className="idees">
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

            <div className="idee content">
                <div className="top">
                    <BsFillGridFill className="uil uil-bar sidebar-toggle"/>

                    <h5 className="admin"> 
                        Mirindrampitia Rakotovao <br/>
                        <span className="mirindra"> @admin </span>
                    </h5>

                    <img src={photo} alt="photo de profil" />
                </div>

                <br/>

                <div className="corps-idee">
                    <div className="titre-grand">
                        <h1 className="title-grand"> Mes idees </h1>
                    </div> 

                    <div className="contenu-idee">
                        <div className="idee-data">
                            <Link to="/afficher" className="link">
                                <div className="idee-1">
                                    <h4 className="titleidee"> Amelioration des infrastructures </h4>
                                    <span className="idee-contain"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  </span> 
                                </div>
                            </Link>

                            <br/>

                            <Link to="/afficher" className="link">
                                <div className="idee-2">
                                    <h4 className="titleidee"> Jeunesse et Sport </h4>
                                    <span className="idee-contain"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut   </span> 
                                </div>
                            </Link>

                            <br/> 

                            <Link to="/afficher" className="link">
                                <div className="idee-3">
                                    <h4 className="titleidee"> Politique </h4>
                                    <span className="idee-contain"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut   </span> 
                                </div>
                            </Link>

                            <br/>

                            <Link to="/afficher" className="link">
                                <div className="idee-4">
                                    <h4 className="titleidee"> Politique </h4>
                                    <span className="idee-contain"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut   </span> 
                                </div>
                            </Link>

                            <br/>

                            <Link to="/afficher" className="link">
                                <div className="idee-5">
                                    <h4 className="titleidee"> Amelioration des infrastructures </h4>
                                    <span className="idee-contain"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut   </span> 
                                </div>
                            </Link>

                            <br/>

                            <Link to="/afficher" className="link">
                                <div className="idee-6">
                                    <h4 className="titleidee"> Jeunesse et Sport </h4>
                                    <span className="idee-contain"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut   </span> 
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="calendrierr">
                    <Calendar className="calendrierss" onChange={onChange} value={date}/>
                </div>

                <div className="notifications">
                <div className="title">
                    <span className="text"> Notifications </span>
                </div>

                <div className="notifications-data">
                    <div className="notificationn-1">
                        <span className="data-title"> Rakoto a aime votre idee </span> 
                    </div>

                    <br/>

                    <div className="notificationn-2">
                        <span className="data-title"> Rasoa a aime votre idee </span> 
                    </div>
                    
                    <br/>
                    
                    <div className="notificationn-3">
                        <span className="data-title"> Votre idee a ete bien recue </span> 
                    </div>

                    <br/>

                    <div className="notificationn-4">
                        <span className="data-title"> Restez connectes pour des MAJ</span> 
                    </div>

                    <br/>
                    
                    <div className="notificationn-5">
                        <span className="data-title"> Vos informations sont incompletes </span> 
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default MesIdees;