import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap'




function App() {


        function openNav(){
          document.getElementById("sideNavigation").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
        }

        function closeNav() {
          document.getElementById("sideNavigation").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
      }





  return (
    <div className="App ">
    
      <div className='menu'>

       {/*    <button className='btn btn-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button> */}

              <div id="sideNavigation" class="sidenav">
                      <a href="javascript:void(0)" class="closebtn" onclick={closeNav()}>&times;</a>
                      <a href="#">About</a>
                      <a href="#">Features</a>
                      <a href="#">Contact Us</a>
                    </div>
                  
                    <nav class="topnav">
                      <a href="#" onclick={openNav()}>
                        <svg width="30" height="30" id="icoOpen">
                            <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
                            <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
                            <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
                        </svg>
                      </a>
                    </nav>
      
     


          

        
      </div>
    
          <div className='row '>
          
              <div className='col-md-3 '>
                
                  <div id="circulo" >
                    <div  className="container fluid topecirculo">
                        <span  className=" spa fa fa-camera fa-2x"></span>
                    </div>
                    <b   /* style="font-size: small;" */ id="texto"><label className="letrasmal">Select.your.picture</label></b>
                  </div>

                   
                   <br></br><br></br>
                         <b className="letrasmal letra2 letra">PROFILE </b><br></br>
                        <p   className="colorgris letra letrasmal divicionletra120">Some representative placeholder <br></br>brcontent for the three columns<br></br> of text below the carousel. This<br></br> is the first column.</p><br></br>
                    
                        <b className="letrasmal letra">PERSONAL DETAIL</b><br></br><br></br>
        
                        <h5 className="colorazul letralarge letra"><b>Birth date</b></h5>
                        <label className="letra colorgris letrasmal divicionletra120" >Enter your birth date</label>
        
                        <h5   className="colorazul letralarge letra"><b>nacionalidad</b> </h5>
                        <label className="letra colorgris letrasmal divicionletra120" >Enter your nacionalidad</label>
        
                        <h5  className="letra colorazul letralarge"><b> Address</b></h5>
                        <label className="letra colorgris letrasmal divicionletra120">Enter your Address</label>
        
                        <br></br><br></br>
                         <b className="letra letrasmal"> CONCTATO</b><br></br><br></br>
                        <label  className="colorgris letra fa fa-envelope-o letrasmal divicionletra120"> Enter your email</label><br></br><br></br>
                        <label  className="colorgris letra  fa fa-phone letrasmal divicionletra120"> Enter your phone</label><br></br><br></br>
                        <label  className="colorgris letra  fa fa-globe letrasmal divicionletra120"> Enter your Address</label>

                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

              </div>

              <div className='col-md-6 '>





              <div className='derech'>
                            <div className="container fluid letra2 cabeceraderecha" ><h1>Luis Paulino</h1></div>
                            <h5 className="letra2 colorgris">YOUR PROFECCIONAL OR SPECIALITY</h5><br></br><br></br><br></br><br></br><br></br>
                
                            <div>
                                <b className="letralarge letra2" >PROFESSIONAL EXPERIENCE</b><br></br><br></br>
                                    
                                <ul className="ul">
                                    <li className="colorazul "><h5 className="colorgris">Position </h5></li>
                                    <div className="linea">
                                    
                                    </div>
                
                                    <div className="divicionletra120" >
                                        <label className="colorgris normal">Employe</label>
                                    <label className="letrapequenaderecha">from-unit</label><br></br>
                                    <p  className="colorgris letrapequena2">Fernando was inspired to create the tool when his sister asked him for help with her resume. After he was unable to find an online tool to assist her</p>
                                    
                                    </div>
                                    <li className="colorazul"><h5 className="colorgris">Position</h5></li>
                                    
                                    
                                    <div className="divicionletra120" >
                                        <label className="colorgris normal">Employe</label>
                                    <label className="letrapequenaderecha">from-unit</label><br></br>
                                    <p  className="colorgris letrapequena2">Fernando was inspired to create the tool when his sister asked him for help with her resume. After he was unable to find an online tool to assist her</p>
                                    
                                    </div>
                                </ul>
                
                                <br></br>
                
                               
                                <ul className="ul margen10">

                                  <b className="letralarge">EDUCATION</b>
                                      <div className="linea2">
                                      
                                      </div>
                                      <li className="colorazul"><h5 className="colorgris">Degree</h5></li>
                                      <label>School </label><label className="letrapequenaabajo" >from-unit</label>
                                      {/* <br><br> */}
                                      
                                      <li className="colorazul"><h5 className="colorgris">Degree</h5></li>
                                      <label className="colorgris">School</label><label className="letrapequenaabajo">from-unit</label>
                                      
                                </ul>
                               
                
                
                
                            
                        </div>
                        
                    </div>






                
              </div>
              

          </div>
     

    </div>
  );
}

export default App;
