import React,{ useEffect, useState } from "react";
import "./jsontask17.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faLocationDot, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
export function Profilemenu(){
    const[profile,setProfile]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/profile.json') 
        .then(data=>data.json())
        .then(da=>setProfile(da))
    })

return(
    <>
    <div className="profilemenubody1">
         <div className="profilemenubody">
          
         
         <nav className="navbar navbar-expand-lg navbar-light profilemenunav">
               <a className="navbar-brand" href="#"><span className="porfilename1">LOGO</span></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                            <li className="nav-item active">
                              <a className="nav-link" href="#"><input type="button" name="button" value="Find Candidates" className="profilemenubtn"/></a>
                            </li>
                            <li className="nav-item active  ">
                             <a className="nav-link" href="#"><span className="porfilename">Find Jobs</span></a>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="#"><span className="porfilename">Find Compaines</span></a>
                            </li>
                         <ul className="navproflie">
                            <li className="nav-item active">
                              <a className="nav-link"><FontAwesomeIcon icon={faBell} className="profilemenubtn3"/></a>
                            </li>
                            <li className="nav-item active">
                             <a className="nav-link "><input type="button" name="button" value="Login" className="profilemenubtn1"/></a>
                            </li>
                            <li className="nav-item active">
                               <a className="nav-link"><input type="button" name="button" value="Regiter" className="profilemenubtn2"/></a>
                            </li>
                         </ul>
                       </ul>
                     </div>
          </nav>
                         <div className="container-fluid py-5">
                              <h1 className="text-center profiletext pt-lg-5 pb-lg-3">Find the candidates as per your requirements</h1>
                                <div className="cent pb-lg-5 ">
                                 <div className="row bg-light p-2 justify-content-center w-75 bord">
                                     <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 mt-1"/>
                                     <input className="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Job Title / Keyword"/>
                                     <h1 className="pr-5 displayspan">|</h1>
                                     <FontAwesomeIcon icon={faLocationDot}className="p-2 mt-1" />
                                     <input className="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Add Country / City"/>
                                     <button className="btn profilemenubtn2 my-2 px-5 my-sm-0" type="submit">Search</button>
                                 </div>
            </div>
            </div>
            </div>

           </div>
            <div className="container-fluid">
            <div className="row justify-content-around py-4">
            <div class="dropdown">
                <button class="btn dropdowncolor dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Experience</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn dropdowncolor dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">HTML/CSS</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn dropdowncolor dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Bangalore</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn dropdowncolor dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">UI/UX Designer</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn dropdowncolor dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Gender</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn dropdowncolor dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Age</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid">
       
       <div className="row p-lg-5 text-center">
       {
           profile.map((value,index)=>
           <>
       <div className="p-3 col-lg-3 profilecard">
           <div className="card profilecard2">
               <img src={value.img} className="card-img-top"/>
               <FontAwesomeIcon icon={faBookmark} className="profilecard1" />
               <div className="card-body">
                   <h5 className="card-title">{value.name}</h5>
                   <p className="card-text">{value.position}</p>
                   <a href="#" className="btn profilemenubtn2">VIEW</a>
               </div>
           </div>        
       </div>
       </>
           )
       }
           </div>
        </div>
            <div className="container-fluid">
                <div className="row">
                <h6 className="text-center col-lg-12">See All Result</h6>
              <span className="text-center col-lg-12"><FontAwesomeIcon icon={faChevronDown}/></span>  
              </div>
            </div>
           </>
           

);


}