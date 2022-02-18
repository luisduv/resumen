import React, { Component } from "react";
import { Secciones } from "../secciones/Secciones"
import { Seccionesedu } from "../secciones/Secionesedu"
import { Seccionesotro } from "../secciones/Seccionesotro";

const data = [];
const info = [];
const infootro = [];


export default class Pagina extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            info: info,
            infootro:infootro,
            indexEdicion: null,
            indexEdicionedu: null,
            indexEdicionotro: null,
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
                education: '',
                institucion: '',
                fechainicioedu: '',
                fechafinedu: '',
                especialidad: '',
                educationotro: '',
                institucionotro: '',
                fechainiciootro: '',
                fechafinotro: '',
            },
            tab: {
                id: '',
                profecionPrueba: '',
                empleador: '',
                fechainicio: '',
                fechafin: '',
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
        this.setState({ indexEdicion: null, tab: { ...tab, profecionPrueba: "", empleador: "", fechainicio: "", fechafin: "" } });
    }

    limpiartodoedu = () => {
        const { form } = this.state;
        this.setState({ indexEdicionedu: null, form: { ...form, education: "", institucion: "", fechainicioedu: "", fechafinedu: "" } });
    }

    limpiartodootro = () => {
        const { form } = this.state;
        this.setState({ indexEdicionotro: null, form: { ...form, educationotro: "", institucionotro: "", fechainicioeduotro: "", fechafineduotro: "" } });
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

    eliminaredu = (dato) => {
        var opcion = window.confirm("Esta seguro de eliminar  " + dato.id);
        if (opcion) {
            var contador = 0;
            var lista = this.state.info;
            lista.map((registro) => {
                if (registro.id == dato.id) {
                    lista.splice(contador, 1)
                }
                contador++;
            });
            this.setState({ info: lista });
        }
    }

    eliminarotro = (dato) => {
        var opcion = window.confirm("Esta seguro de eliminar  " + dato.id);
        if (opcion) {
            var contador = 0;
            var lista = this.state.info;
            lista.map((registro) => {
                if (registro.id == dato.id) {
                    lista.splice(contador, 1)
                }
                contador++;
            });
            this.setState({ info: lista });
        }
    }
    //editar y guradar
    editar = () => {
        debugger
        var lista = this.state.data;
        const { tab } = this.state;
        var indexEdicion = this.state.indexEdicion;
        if (tab.profecionPrueba == "" && tab.empleador == "" && tab.fechafin == "" && tab.fechainicio == "") {
            alert("Debe de agregar una Posición o un Empleador o las Fechas ")
        }
        else if (indexEdicion >= 0 && typeof indexEdicion == "number") {
            lista[indexEdicion].profecionPrueba = tab.profecionPrueba;
            lista[indexEdicion].empleador = tab.empleador;
            lista[indexEdicion].fechafin = tab.fechafin;
            lista[indexEdicion].fechainicio = tab.fechainicio;
        }
        else {
            var id = this.state.data.length + 1;
            lista.push({ id, profecionPrueba: tab.profecionPrueba, empleador: tab.empleador, fechainicio: tab.fechainicio, fechafin: tab.fechafin })
        }
        this.limpiartodo()
        this.setState({ indexEdicion: null, data: lista });
        console.log(data)
    }

    //editar y guradar
    editaredu = () => {
        var lista = this.state.info;
        const { form } = this.state;
        var indexEdicionedu = this.state.indexEdicionedu;
        if (form.education == "" && form.institucion == "" && form.fechafinedu == "" && form.fechainicioedu == "") {
            alert("Debe de agregar una institución y un grado ")
        }
        else if (indexEdicionedu >= 0 && typeof indexEdicionedu == "number") {
            lista[indexEdicionedu].education = form.education;
            lista[indexEdicionedu].institucion = form.institucion;
            lista[indexEdicionedu].fechafinedu = form.fechafinedu;
            lista[indexEdicionedu].fechainicioedu = form.fechainicioedu;
        }
        else {
            var id = this.state.info.length + 1;
            lista.push({ id, education: form.education, institucion: form.institucion, fechainicioedu: form.fechainicioedu, fechafinedu: form.fechafinedu })
        }
        this.limpiartodoedu()
        this.setState({ indexEdicionedu: null, info: lista });
        console.log(data)
    }

    editarotro = () => {
        var lista = this.state.infootro;
        const { form } = this.state;
        var indexEdicionotro = this.state.indexEdicionotro;
        if (form.educationotro == "" && form.institucionotro == "" && form.fechafinotro == "" && form.fechainiciootro == "") {
            alert("Debe de agregar una institución y un grado ")
        }
        else if (indexEdicionotro >= 0 && typeof indexEdicionotro == "number") {
            lista[indexEdicionotro].educationotro = form.educationotro;
            lista[indexEdicionotro].institucionotro = form.institucionotro;
            lista[indexEdicionotro].fechafinotro = form.fechafinotro;
            lista[indexEdicionotro].fechainiciootro = form.fechainiciootro;
        }
        else {
            var id = this.state.infootro.length + 1;
            lista.push({ id, educationotro: form.educationotro, institucionotro: form.institucionotro, fechainiciootro: form.fechainiciootro, fechafinotro: form.fechafinotro })
        }
        this.limpiartodoedu()
        this.setState({ indexEdicionotro: null, infootro: lista });
        console.log(data)
    }

    mostrareditar = (dato, indexArreglo) => {
        const { tab } = this.state;
        var indexEdicion = indexArreglo;
        this.setState({ indexEdicion, tab: { ...tab, ...dato } });
    }

    mostrareditaredu = (dato, indexArreglo) => {
        const { form } = this.state;
        var indexEdicionedu = indexArreglo;
        this.setState({ indexEdicionedu, form: { ...form, ...dato } });
    }

    mostrareditarotro = (dato, indexArreglo) => {
        const { form } = this.state;
        var indexEdicionotro = indexArreglo;
        this.setState({ indexEdicionotro, form: { ...form, ...dato } });
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

                            <b className="titul in"> Información Personal</b>

                            <form id="formulario" className="form-control">

                                <label htmlFor="name" className='letraBlanco'>Nombre</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.name} name="name" id="name" className="form-control  form-control-sm input" placeholder="Nombre" type="text"></input>

                                <label htmlFor="BirthDate" className='letraBlanco'>Fecha Nacimineto</label><br></br>
                                <input data-date-format="dd/mm/yyyy" onChange={this.handleChange} autocomplete="off" value={this.state.form.BirthDate} name="BirthDate" id="BirthDate" className="form-control  form-control-sm input" placeholder="fecha Nacimineto" type="date"></input>

                                <label htmlFor="profile" className='letraBlanco'>Descripcion Personal</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" name="profile" id="profile" className="form-control  form-control-sm input" placeholder="Perfil" type="text" value={this.state.form.profile}></input>

                                <label htmlFor="especialidad" className='letraBlanco'>Especialidad Laboral</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.especialidad} name="especialidad" id="especialidad" className="form-control  form-control-sm input" placeholder="Especialidad" type="text"></input>

                                <label htmlFor="nacionalidad" className='letraBlanco'>Nacionalidad</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.nacionalidad} name="nacionalidad" id="nacionalidad" className="form-control  form-control-sm input" placeholder="Nacionalidad" type="text"></input>

                                <label htmlFor="address" className='letraBlanco'>Dirección</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.address} name="address" id="address" className="form-control  form-control-sm input" placeholder="Dirección" type="text"></input>

                                <label htmlFor="email" className='letraBlanco'>Email</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.email} name="email" id="email" className="form-control  form-control-sm input" placeholder="Email" type="email"></input>

                                <label htmlFor="phone" className='letraBlanco'>Celular</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.phone} name="phone" id="phone" className="form-control  form-control-sm input" placeholder="Celular" type="number"></input>

                                <label htmlFor="address2" className='letraBlanco'>Pagina Web</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.address2} name="address2" id="address2" className="form-control  form-control-sm input" placeholder="Web" type="web"></input>

                                <b className="titul"> Información Laboral</b>
                                <label htmlFor="profecionPrueba" className='letraBlanco'>Nombre Posición</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.tab.profecionPrueba} name="profecionPrueba" id="profecionPrueba" className="form-control  form-control-sm input" placeholder="Posición" type="text"></input>

                                <label htmlFor="empleador" className='letraBlanco'>Empleador</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.tab.empleador} name="empleador" id="empleador" className="form-control  form-control-sm input" placeholder="Empleador" type="text"></input>

                                <label htmlFor="fechainicio" className='letraBlanco'>Fecha inicio</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.tab.fechainicio} name="fechainicio" id="fechainicio" className="form-control  form-control-sm input" placeholder="Fecha Inicio" type="date"></input>

                                <label htmlFor="fechafin" className='letraBlanco'>Fecha Fin</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.tab.fechafin} name="fechafin" id="fechafin" className="form-control  form-control-sm input" placeholder="Fecha Fin" type="date"></input>

                                <button type="button" className="btn btn-success btn-sm botones2" onClick={() => this.editar()}>Guardar</button>
                                <button type="button" className="btn btn-warning btn-sm botones" onClick={() => this.limpiartodo()}>limpiar</button>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Posición</th>
                                            <th scope="col">Empleador</th>
                                            <th scope="col"> Inicio</th>
                                            <th scope="col"> Fin</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.data.map((e, i) => (
                                            <tr>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditar(e, i)}>{e.profecionPrueba}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditar(e, i)}>{e.empleador}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditar(e, i)}>{e.fechainicio}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditar(e, i)}>{e.fechafin}</td>

                                                {/*   <td><button type="button" onClick={() => this.editar(e)} className="btn btn-danger">editar</button></td>  */}
                                                <td className="eli"><button type="button" onClick={() => this.eliminar(e)} className="btn btn-danger btn-sm ">Eliminar</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <b className="titul"> Educación</b>

                                <label htmlFor="institucion" className='letraBlanco'>Institución</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.institucion} name="institucion" id="institucion" className="form-control  form-control-sm input" placeholder="Institución" type="text"></input>

                                <label htmlFor="education" className='letraBlanco'>Grado</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.education} name="education" id="education" className="form-control  form-control-sm" placeholder="Grado" type="text"></input><br></br>

                                <label htmlFor="fechainicioedu" className='letraBlanco'>Fecha inicio</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.fechainicioedu} name="fechainicioedu" id="fechainicioedu" className="form-control  form-control-sm input" placeholder="Fecha Inicio" type="date"></input>

                                <label htmlFor="fechafinedu" className='letraBlanco'>Fecha Fin</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.fechafinedu} name="fechafinedu" id="fechafinedu" className="form-control  form-control-sm input" placeholder="Fecha Fin" type="date"></input>


                                <button type="button" className="btn btn-success btn-sm botones2" onClick={() => this.editaredu()}>Guardar</button>
                                <button type="button" className="btn btn-warning btn-sm botones" onClick={() => this.limpiartodoedu()}>limpiar</button>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Institución</th>
                                            <th scope="col">Grado</th>
                                            <th scope="col"> Inicio</th>
                                            <th scope="col"> Fin</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.info.map((e, i) => (
                                            <tr>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.institucion}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.education}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.fechainicioedu}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.fechafinedu}</td>

                                                {/*   <td><button type="button" onClick={() => this.editar(e)} className="btn btn-danger">editar</button></td>  */}
                                                <td className="eli"><button type="button" onClick={() => this.eliminaredu(e)} className="btn btn-danger btn-sm ">Eliminar</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <b className="titul"> Otros Estudios</b>

                                <label htmlFor="institucionotro" className='letraBlanco'>Institución</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.institucionotro} name="institucionotro" id="institucionotro" className="form-control  form-control-sm input" placeholder="Institución" type="text"></input>

                                <label htmlFor="educationotro" className='letraBlanco'>Grado</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.educationotro} name="educationotro" id="educationotro" className="form-control  form-control-sm" placeholder="Grado" type="text"></input><br></br>

                                <label htmlFor="fechainiciootro" className='letraBlanco'>Fecha inicio</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.fechainiciootro} name="fechainiciootro" id="fechainiciootro" className="form-control  form-control-sm input" placeholder="Fecha Inicio" type="date"></input>

                                <label htmlFor="fechafinotro" className='letraBlanco'>Fecha Fin</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" value={this.state.form.fechafinotro} name="fechafinotro" id="fechafinotro" className="form-control  form-control-sm input" placeholder="Fecha Fin" type="date"></input>


                                <button type="button" className="btn btn-success btn-sm botones2" onClick={() => this.editarotro()}>Guardar</button>
                                <button type="button" className="btn btn-warning btn-sm botones" onClick={() => this.limpiartodootro()}>limpiar</button>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Institución</th>
                                            <th scope="col">Grado</th>
                                            <th scope="col"> Inicio</th>
                                            <th scope="col"> Fin</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.infootro.map((e, i) => (
                                            <tr>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.institucionotro}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.educationotro}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.fechainiciootro}</td>
                                                <td className=" contenidoeli" onClick={() => this.mostrareditaredu(e, i)}>{e.fechafinotro}</td>

                                                {/*   <td><button type="button" onClick={() => this.editar(e)} className="btn btn-danger">editar</button></td>  */}
                                                <td className="eli"><button type="button" onClick={() => this.eliminarotro(e)} className="btn btn-danger btn-sm ">Eliminar</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/*   <label htmlFor="education2" className='letraBlanco'>Education</label><br></br>
                                <input onChange={this.handleChange} autocomplete="off" name="education2" id="education2" className="form-control  form-control-sm" placeholder="Education" type="text"></input><br></br>
 */}
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

                <div className={'row ' + (this.state.open ? claseopen : claseclose)} id="fill" >
                    <div className='col-md-3'>
                        <div id="circulo" >
                            <div className="container fluid topecirculo">
                                <span className=" spa fa fa-camera fa-2x"></span>
                            </div>
                            <b   /* style="font-size: small;" */ id="texto"><label className="letrasmal">Select.your.picture</label></b>
                        </div>

                        <br></br><br></br>
                        <b className="letrasmal letra2 letra tamano"><b className="tamano">PERFIL</b> </b><br></br>
                        <p id="pprofile" className="parrafo colorgris letra letrasmal divicionletra120"> {this.state.form.profile}{/* Some representative placeholder <br></br>brcontent for the three columns<br></br> of text below the carousel. This<br></br> is the first column. */}</p><br></br>

                        <b className="letrasmal letra tamano"><b className="tamano">DESCIPCIÓN PERSONAL</b></b><br></br><br></br>

                        <h5 className="colorazul  letra "><b className="tamano">FECHA NACIMINETO</b></h5>
                        <label data-date-format="dd-mm-yyyy" className="letra colorgris letrasmal divicionletra120" > {this.state.form.BirthDate}{/* Enter your birth date */}</label>

                        <h5 className="colorazul  letra"><b className="tamano">NACIONALIDAD</b> </h5>
                        <label className="letra colorgris letrasmal divicionletra120 parrafo" > {this.state.form.nacionalidad}{/* Enter your nacionalidad */}</label>

                        <h5 className="letra colorazul "><b className="tamano"> DIRECCIÓN</b></h5>
                        <label className="letra colorgris letrasmal divicionletra120 parrafo"> {this.state.form.address}{/* Enter your Address */}</label>

                        <br></br><br></br>
                        <b className="letra letrasmal"><b className="tamano">CONCTATO</b> </b><br></br><br></br>
                        <label className="colorgris letra fa fa-envelope-o letrasmal divicionletra120 parrafo"> {this.state.form.email} {/* Enter your email */}</label><br></br><br></br>
                        <label className="colorgris letra  fa fa-phone letrasmal divicionletra120 parrafo"> {this.state.form.phone}{/* Enter your phone */}</label><br></br><br></br>
                        <label className="colorgris letra  fa fa-globe letrasmal divicionletra120 parrafo"> {this.state.form.address2}{/* Enter your Address */}</label>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>

                    <div className='col-md-6 '>

                        <div className='derech'>
                            <div className="container fluid letra2 cabeceraderecha" ><h1 className="inputnombre">{this.state.form.name}{/* Luis Paulino */}</h1></div>
                            <h5 className="letra2 colorgris parrafo">{this.state.form.especialidad}</h5><br></br><br></br><br></br><br></br><br></br>

                            <div>
                                <b className="letralarge letra2"> <b>EXPERIENCIA PROFECIONAL</b></b><br></br><br></br>
                                <div>
                                    <Secciones data={this.state.data} />
                                </div>

                                <br></br>
                                <div className="edu">
                                    <b className="letralarge letra2"><b>EDUCACIÓN</b></b>
                                    <Seccionesedu data={this.state.info} />
                                </div>

                                <br></br>
                                <div className="edu">
                                    <b className="letralarge letra2"><b>Otros Estudios</b></b>
                                    <Seccionesotro data={this.state.infootro} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}