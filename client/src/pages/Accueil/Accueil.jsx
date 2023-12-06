import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import HM from '../img/Logo_Haute_Matsiatra.png';
import photo from '../img/profil.png';
import image1 from '../img/image_1.jpg';
import image2 from '../img/image_2.jpg';
import image3 from '../img/image_3.jpg';
import {BsFillArrowLeftCircleFill, BsFillClockFill, BsFillClipboard2HeartFill, BsFillChatQuoteFill, BsFillBellFill, BsFillHouseFill, BsFillMoonFill, BsFillLightbulbFill, BsFillPlusCircleFill, BsFillGridFill, BsFillLayersFill} from "react-icons/bs";
import "./Accueil.css";


const Accueil =  () =>{
   const [date, setDate] = useState(new Date());
    
   const onChange = date => {
    setDate(date);
   };

    useEffect(() => {
        const body = document.querySelector("body");
        const modeToggle = body.querySelector(".mode-toggle");

        const toggleDarkMode = () => {
            body.classList.toggle("dark");
        };

        modeToggle.addEventListener("click", toggleDarkMode);

        return () => {
            // Clean up the event listener when the component unmounts
            modeToggle.removeEventListener("click", toggleDarkMode);
        };
    }, []);

return(
    <div className="body">
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
                        <a href="#">
                            <BsFillHouseFill className="uil uil-estate"/>
                            <span className="link-name"> Accueil </span>
                        </a>
                    </li>

                    <li> 
                        <a href="/publier">
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

        <div className="dashboard ">
            <div className="top">
                <BsFillGridFill className="uil uil-bar sidebar-toggle"/>

                <h5 className="admin"> 
                    Mirindrampitia Rakotovao <br/>
                    <span className="mirindra"> @admin </span>
                </h5>

                <img src={photo} alt="photo de profil" />
            </div>

            <div className="dash-content">
                <div className="overview">
                    <div className="boxes">
                        <div className="box box1">
                            <img src={image1} alt="image1" className="image1" height={310}/>  <br/>
                            {/* <span className="text1"> Idees Publiees </span> <br/>
                            <BsFillLightbulbFill className="uil uil-idee"/> */}
                        </div>

                        <div className="box box2">
                            <img src={image2} alt="image1" className="image2" height={315}/> <br/>
                            {/* <span className="text2"> Idees Innovantes </span>
                            <BsFillClipboard2HeartFill className="uil uil-clipboard"/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="activity">
                <div className="title">
                    <span className="text"> Idees Publiees </span>
                </div>

                <div className="activity-data">
                    <div className="data-names">
                        <span className="data-title"> Amelioration des infrastructures </span> <br/> <br/>
                        <span className="data-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </span>
                    </div>
                    
                    <br/>

                    <div className="data-email">
                        <span className="data-title"> Jeunesse et Sport </span> <br/> <br/>
                        <span className="data-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </span>
                    </div>

                    <br/>

                    <div className="data-politique">
                        <span className="data-title"> Politique </span> <br/> <br/>
                        <span className="data-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </span>
                    </div>

                    <br/>

                    <div className="data-infrastructure">
                        <span className="data-title"> Amelioration des infrastructures </span> <br/> <br/>
                        <span className="data-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </span>
                    </div>
                </div>
            </div>
            
            <div className="calendrier">
                <Calendar className="calendriers" onChange={onChange} value={date}/>
            </div>

            <div className="notifications">
                <div className="title">
                    <span className="text"> Notifications </span>
                </div>

                <div className="notifications-data">
                    <div className="notification-1">
                        <span className="data-title"> Rakoto a aime votre idee </span> 
                    </div>

                    <br/>

                    <div className="notification-2">
                        <span className="data-title"> Rasoa a aime votre idee </span> 
                    </div>
                    
                    <br/>
                    
                    <div className="notification-3">
                        <span className="data-title"> Votre idee a ete bien recue </span> 
                    </div>

                    <br/>

                    <div className="notification-4">
                        <span className="data-title"> Restez connectes pour des MAJ</span> 
                    </div>

                    <br/>
                    
                    <div className="notification-5">
                        <span className="data-title"> Vos informations sont incompletes </span> 
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
};

export default Accueil;
