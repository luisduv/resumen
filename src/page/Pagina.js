import React, { Component } from "react";


const data = [];

export default class Pagina extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            indexEdicion: null,
            open: false,


            form: {
                profile: '',
                BirthDate: '',
                nacionalidad: '',
                address: '',
                email: '',
                phone: '',
                address2: '',
                name: '',
                position2: '',
                education: '',
                education2: '',


            },
            tab: {
                id: '',
                profecionPrueba: ''
            }
            ,
            menuOpen: false
        }
    }


    openNav = () => {
        this.setState({ open: true })
    }

    closeNav = () => {
        this.setState({ open: false })
    }


    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
            tab: {
                ...this.state.tab,
                [e.target.name]: e.target.value,
            }
        });
    }

    limpiartodo = () => {
        const { tab } = this.state;
        this.setState({ indexEdicion: null, tab: { ...tab, profecionPrueba: "" } });
    }

    eliminar = (dato) => {
        var opcion = window.confirm("Esta seguro de eliminar  " + dato.id);
        if (opcion) {
            var contador = 0;
            var lista = this.state.data;
            lista.map((registro) => {
                if (registro.id == dato.id) {
                    lista.splice(contador, 1)
                }
                contador++;
            });
            this.setState({ data: lista });
        }
    }

    editar = () => {
        var lista = this.state.data;
        const { tab } = this.state;
        var indexEdicion = this.state.indexEdicion;

        if (indexEdicion >= 0 && typeof indexEdicion == "number") {

            lista[indexEdicion].profecionPrueba = tab.profecionPrueba;
        }
        else {
            var id = this.state.data.length + 1;
            lista.push({ id, profecionPrueba: tab.profecionPrueba })
        }
        this.limpiartodo()
        this.setState({ indexEdicion: null, data: lista });
        console.log(data)
    }

    mostrareditar = (dato, indexArreglo) => {
        const { tab } = this.state;
        var indexEdicion = indexArreglo;
        this.setState({ indexEdicion, tab: { ...tab, ...dato } });
    }



    render() {
        let claseopen = '';
        let claseopen2 = 'sidenav'
        let claseclose = '';
        let claseclose2 = 'sidenav'

        if (this.state.open == true) {
            claseopen += ' openmenufill';
        }
        if (this.state.open == true) {
            claseopen2 += ' openmenusidev';
        } if (this.state.open == false) {
            claseclose += ' closemenufill';
        }
        if (this.state.open == false) {
            claseclose2 += ' closemenusidev';
        }

        return (
            <div>
                <div className='menu'>
                    <div id="sideNavigation" className={'sidenav ' + this.state.openmenusidev ? claseopen2 : claseclose2}>
                        <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()} >&times;</a>
                        <div className='conteiner'>
                            <form id="formulario" className="form-control">
                                <label htmlFor="profile" className='letraBlanco'>Profile</label><br></br>
                                <input onChange={this.handleChange} name="profile" id="profile" className="form-control  form-control-sm" placeholder="Perfil" type="text" value={this.state.form.profile}></input><br></br>

                                <label htmlFor="BirthDate" className='letraBlanco'>Birth Date</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.BirthDate} name="BirthDate" id="BirthDate" className="form-control  form-control-sm" placeholder="fecha Cumpleaños" type="date"></input><br></br>

                                <label htmlFor="nacionalidad" className='letraBlanco'>Nacionalidad</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.nacionalidad} name="nacionalidad" id="nacionalidad" className="form-control  form-control-sm" placeholder="Nacionalidad" type="text"></input><br></br>

                                <label htmlFor="address" className='letraBlanco'>Address</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.address} name="address" id="address" className="form-control  form-control-sm" placeholder="Address" type="text"></input><br></br>

                                <label htmlFor="email" className='letraBlanco'>Email</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.email} name="email" id="email" className="form-control  form-control-sm" placeholder="Email" type="email"></input><br></br>

                                <label htmlFor="phone" className='letraBlanco'>Phone</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.phone} name="phone" id="phone" className="form-control  form-control-sm" placeholder="Phone" type="number"></input><br></br>

                                <label htmlFor="address2" className='letraBlanco'>Address</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.address2} name="address2" id="address2" className="form-control  form-control-sm" placeholder="Address" type="text"></input><br></br>

                                <label htmlFor="name" className='letraBlanco'>Name</label><br></br>
                                <input onChange={this.handleChange} value={this.state.form.name} name="name" id="name" className="form-control  form-control-sm" placeholder="Name" type="text"></input><br></br>
                                <hr></hr>

                                <label htmlFor="profecionPrueba" className='letraBlanco'>Nombre Posición</label><br></br>
                                <input onChange={this.handleChange} value={this.state.tab.profecionPrueba} name="profecionPrueba" id="profecionPrueba" className="form-control  form-control-sm" placeholder="Posición" type="text"></input>
                                
                                <button type="button" className="btn btn-success btn-sm botones2" onClick={() => this.editar()}>Guardar</button>
                                <button type="button" className="btn btn-warning btn-sm botones" onClick={() => this.limpiartodo()}>limpiar</button>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Posición</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.data.map((e, i) => (
                                            <tr>
                                                <td onClick={() => this.mostrareditar(e, i)}>{e.profecionPrueba}</td>
                                                {/*   <td><button type="button" onClick={() => this.editar(e)} className="btn btn-danger">editar</button></td>  */}
                                                <td><button type="button" onClick={() => this.eliminar(e)} className="btn btn-danger">X</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <label htmlFor="position2" className='letraBlanco'>Position Employe</label><br></br>
                                <input onChange={this.handleChange} name="position2" id="position2" className="form-control  form-control-sm" placeholder="Position" type="text"></input><br></br>

                                <label htmlFor="education" className='letraBlanco'>Education</label><br></br>
                                <input onChange={this.handleChange} name="education" id="education" className="form-control  form-control-sm" placeholder="Education" type="text"></input><br></br>

                                <label htmlFor="education2" className='letraBlanco'>Education</label><br></br>
                                <input onChange={this.handleChange} name="education2" id="education2" className="form-control  form-control-sm" placeholder="Education" type="text"></input><br></br>

                            </form>
                        </div>
                    </div>

                    <nav className="topnav">

                        <a href="#" className="raya" onClick={() => this.openNav()}>
                            <svg width="26" height="30" id="icoOpen">
                                <path d="M0,5 30,5" stroke="#000" stroke-width="5" />
                                <path d="M0,14 30,14" stroke="#000" stroke-width="5" />
                                <path d="M0,23 30,23" stroke="#000" stroke-width="5" />
                            </svg>
                        </a>
                    </nav>







                </div>

                <div className={'row ' + (this.state.openmenufill ? claseopen : claseclose)} id="fill" >
                    <div className='col-md-3'>
                        <div id="circulo" >
                            <div className="container fluid topecirculo">
                                <span className=" spa fa fa-camera fa-2x"></span>
                            </div>
                            <b   /* style="font-size: small;" */ id="texto"><label className="letrasmal">Select.your.picture</label></b>
                        </div>


                        <br></br><br></br>
                        <b className="letrasmal letra2 letra">PROFILE </b><br></br>
                        <p id="pprofile" className="parrafo colorgris letra letrasmal divicionletra120"> {this.state.form.profile}{/* Some representative placeholder <br></br>brcontent for the three columns<br></br> of text below the carousel. This<br></br> is the first column. */}</p><br></br>

                        <b className="letrasmal letra">PERSONAL DETAIL</b><br></br><br></br>

                        <h5 className="colorazul letralarge letra"><b>Birth date</b></h5>
                        <label className="letra colorgris letrasmal divicionletra120" > {this.state.form.BirthDate}{/* Enter your birth date */}</label>

                        <h5 className="colorazul letralarge letra"><b>nacionalidad</b> </h5>
                        <label className="letra colorgris letrasmal divicionletra120 parrafo" > {this.state.form.nacionalidad}{/* Enter your nacionalidad */}</label>

                        <h5 className="letra colorazul letralarge"><b> Address</b></h5>
                        <label className="letra colorgris letrasmal divicionletra120 parrafo"> {this.state.form.address}{/* Enter your Address */}</label>

                        <br></br><br></br>
                        <b className="letra letrasmal"> CONCTATO</b><br></br><br></br>
                        <label className="colorgris letra fa fa-envelope-o letrasmal divicionletra120 parrafo"> {this.state.form.email} {/* Enter your email */}</label><br></br><br></br>
                        <label className="colorgris letra  fa fa-phone letrasmal divicionletra120 parrafo"> {this.state.form.phone}{/* Enter your phone */}</label><br></br><br></br>
                        <label className="colorgris letra  fa fa-globe letrasmal divicionletra120 parrafo"> {this.state.form.address2}{/* Enter your Address */}</label>

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
                                        <p className="colorgris letrapequena2 parrafo">{this.state.data.map((e) => (<tr>{e.profecionPrueba}</tr>))}{/* {this.state.form.position} */}{/* Fernando was inspired to create the tool when his sister asked him for help with her resume. After he was unable to find an online tool to assist her */}</p>
                                        <br></br><br></br>
                                    </div>
                                    <li className="colorazul"><h5 className="colorgris">Position</h5></li>


                                    <div className="divicionletra120" >
                                        <label className="colorgris normal">Employe</label>
                                        <label className="letrapequenaderecha">from-unit</label><br></br>
                                        <p className="colorgris letrapequena2 parrafo">{this.state.form.position2}{/* Fernando was inspired to create the tool when his sister asked him for help with her resume. After he was unable to find an online tool to assist her */}</p>

                                    </div>
                                </ul>

                                <br></br>


                                <ul className="ul margen10">

                                    <b className="letralarge">EDUCATION</b>
                                    <div className="linea2">

                                    </div>
                                    <li className="colorazul"><h5 className="colorgris">Degree</h5></li><label className="letrapequenaabajo " >from-unit</label>
                                    <p className="parrafo colorgris"> {this.state.form.education}{/* School */} </p>
                                    {/* <br><br> */}
                                    <br></br><br></br>
                                    <li className="colorazul"><h5 className="colorgris">Degree</h5></li><label className="letrapequenaabajo ">from-unit</label>
                                    <p className="parrafo colorgris "> {this.state.form.education2}{/* School */}</p>

                                </ul>





                            </div>

                        </div>







                    </div>


                </div>

            </div>



        )
    }


}