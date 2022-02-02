import React,{Component} from "react";




export default class Pagina extends Component{

    constructor(props){
        super(props);
            this.state={
                
                form:{
                    profile:'',
                    BirthDate:'',
                    nacionalidad:'',
                    address:'',
                    email:'',
                    phone:'',
                    address2:'',
                    name:'',
                    position:'',
                    position2:'',
                    education:'',
                    education2:'',

                }
                
            }
    }

    
     openNav=()=>{
        document.getElementById("sideNavigation").style.width = "400px";
        document.getElementById("main").style.marginLeft = "400px";
      }

       closeNav=()=> {
        document.getElementById("sideNavigation").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      } 


      handleChange=e=>{
        this.setState({
            form:{
                 ...this.state.form, 
                [e.target.name]: e.target.value,
            }
        });
      }


    




        render(){
            return(
               

                <div>
                     <div className='menu'>

                {/*    <button className='btn btn-secondary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list " viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button> */}

               <div id="sideNavigation" className="sidenav">
                 <a href="javascript:void(0)" className="closebtn" onClick={()=>this.closeNav()} >&times;</a>
               <div className='conteiner'>

               <form id="formulario"  className="form-control">

               <label for="profile" className='letraBlanco'>Profile</label><br></br>
               <input onChange={this.handleChange} name="profile" id="profile" className="form-control col-xs-4" placeholder="Perfil" type="text"></input><br></br>

               <label for="BirthDate" className='letraBlanco'>Birth Date</label><br></br>
               <input onChange={this.handleChange} name="BirthDate" id="BirthDate" className="form-control " placeholder="fecha Cumpleaños" type="date"></input><br></br>

               <label for="nacionalidad" className='letraBlanco'>Nacionalidad</label><br></br>
               <input onChange={this.handleChange} name="nacionalidad" id="nacionalidad" className="form-control " placeholder="Nacionalidad" type="text"></input><br></br>

               <label for="address" className='letraBlanco'>Address</label><br></br>
               <input onChange={this.handleChange} name="address" id="address" className="form-control " placeholder="Address" type="text"></input><br></br>

               <label for="email" className='letraBlanco'>Email</label><br></br>
               <input onChange={this.handleChange} name="email" id="email" className="form-control " placeholder="Email" type="email"></input><br></br>

               <label for="phone" className='letraBlanco'>Phone</label><br></br>
               <input onChange={this.handleChange} name="phone" id="phone" className="form-control " placeholder="Phone" type="number"></input><br></br>

               <label for="address2" className='letraBlanco'>Address</label><br></br>
               <input onChange={this.handleChange} name="address2" id="address2" className="form-control " placeholder="Address" type="text"></input><br></br>

               <label for="name" className='letraBlanco'>Name</label><br></br>
               <input onChange={this.handleChange} name="name" id="name" className="form-control " placeholder="Name" type="text"></input><br></br>

               <label for="position" className='letraBlanco'>Position Employe</label><br></br>
               <input onChange={this.handleChange} name="position" id="position" className="form-control " placeholder="Position" type="text"></input><br></br>

               <label for="position2" className='letraBlanco'>Position Employe</label><br></br>
               <input onChange={this.handleChange} name="position2" id="position2" className="form-control " placeholder="Position" type="text"></input><br></br>

               <label for="education" className='letraBlanco'>Education</label><br></br>
               <input onChange={this.handleChange} name="education" id="education" className="form-control " placeholder="Education" type="text"></input><br></br>

               <label for="education2" className='letraBlanco'>Education</label><br></br>
               <input onChange={this.handleChange} name="education2" id="education2" className="form-control " placeholder="Education" type="text"></input><br></br>







               </form>
               
               </div>
             </div>
           
             <nav className="topnav">
               <a href="#" className="raya" onClick={()=>this.openNav()}  >
                 <svg width="26" height="30"  id="icoOpen">
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
                 <p id="pprofile"  className="parrafo colorgris letra letrasmal divicionletra120"> {this.state.form.profile}{/* Some representative placeholder <br></br>brcontent for the three columns<br></br> of text below the carousel. This<br></br> is the first column. */}</p><br></br>
             
                 <b className="letrasmal letra">PERSONAL DETAIL</b><br></br><br></br>
 
                 <h5 className="colorazul letralarge letra"><b>Birth date</b></h5>
                 <label className="letra colorgris letrasmal divicionletra120" > {this.state.form.BirthDate}{/* Enter your birth date */}</label>
 
                 <h5   className="colorazul letralarge letra"><b>nacionalidad</b> </h5>
                 <label className="letra colorgris letrasmal divicionletra120 parrafo" > {this.state.form.nacionalidad}{/* Enter your nacionalidad */}</label>
 
                 <h5  className="letra colorazul letralarge"><b> Address</b></h5>
                 <label className="letra colorgris letrasmal divicionletra120 parrafo"> {this.state.form.address}{/* Enter your Address */}</label>
 
                 <br></br><br></br>
                  <b className="letra letrasmal"> CONCTATO</b><br></br><br></br>
                 <label  className="colorgris letra fa fa-envelope-o letrasmal divicionletra120"> {this.state.form.email} {/* Enter your email */}</label><br></br><br></br>
                 <label  className="colorgris letra  fa fa-phone letrasmal divicionletra120"> {this.state.form.phone}{/* Enter your phone */}</label><br></br><br></br>
                 <label  className="colorgris letra  fa fa-globe letrasmal divicionletra120"> {this.state.form.address2}{/* Enter your Address */}</label>

                 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

       </div>

       <div className='col-md-6 '>





       <div className='derech'>
                     <div className="container fluid letra2 cabeceraderecha" ><h1>{this.state.form.name}{/* Luis Paulino */}</h1></div>
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
                             <p  className="colorgris letrapequena2 parrafo">{this.state.form.position}{/* Fernando was inspired to create the tool when his sister asked him for help with her resume. After he was unable to find an online tool to assist her */}</p>
                             
                             </div>
                             <li className="colorazul"><h5 className="colorgris">Position</h5></li>
                             
                             
                             <div className="divicionletra120" >
                                 <label className="colorgris normal">Employe</label>
                             <label className="letrapequenaderecha">from-unit</label><br></br>
                             <p  className="colorgris letrapequena2 parrafo">{this.state.form.position2}{/* Fernando was inspired to create the tool when his sister asked him for help with her resume. After he was unable to find an online tool to assist her */}</p>
                             
                             </div>
                         </ul>
         
                         <br></br>
         
                        
                         <ul className="ul margen10">

                           <b className="letralarge">EDUCATION</b>
                               <div className="linea2">
                               
                               </div>
                               <li className="colorazul"><h5 className="colorgris">Degree</h5></li>
                               <label className="parrafo colorgris"> {this.state.form.education}{/* School */} </label><label className="letrapequenaabajo" >from-unit</label>
                               {/* <br><br> */}
                               
                               <li className="colorazul"><h5 className="colorgris">Degree</h5></li>
                               <label className="colorgris parrafo"> {this.state.form.education2}{/* School */}</label><label className="letrapequenaabajo">from-unit</label>
                               
                         </ul>
                        
         
         
         
                     
                 </div>
                 
             </div>






         
       </div>
       

   </div>

                </div>



            )
        }


}