export function Fachada({ }) {
    return (
        <div className="row" id="fill" >
            <div className='col-md-3'>
                <div id="circulo" >
                    <div className="container fluid topecirculo">
                        <span className=" spa fa fa-camera fa-2x"></span>
                    </div>
                    <b   /* style="font-size: small;" */ id="texto"><label className="letrasmal">Select.your.picture</label></b>
                </div>

                <br></br><br></br>
                <b className="letrasmal letra2 letra tamano"><b className="tamano">PERFIL</b> </b><br></br>
                <p id="pprofile" className="parrafo colorgris letra letrasmal divicionletra120"> Some representative placeholder <br></br>brcontent for the three columns<br></br> of text below the carousel. This<br></br> is the first column. </p><br></br>

                <b className="letrasmal letra tamano"><b className="tamano">DESCIPCIÓN PERSONAL</b></b><br></br><br></br>

                <h5 className="colorazul  letra "><b className="tamano">FECHA NACIMINETO</b></h5>
                <label data-date-format="dd-mm-yyyy" className="letra colorgris letrasmal divicionletra120" >  Enter your birth date </label>

                <h5 className="colorazul  letra"><b className="tamano">NACIONALIDAD</b> </h5>
                <label className="letra colorgris letrasmal divicionletra120 parrafo" >  Enter your nacionalidad </label>

                <h5 className="letra colorazul "><b className="tamano"> DIRECCIÓN</b></h5>
                <label className="letra colorgris letrasmal divicionletra120 parrafo">  Enter your Address </label>

                <br></br><br></br>
                <b className="letra letrasmal"><b className="tamano">CONCTATO</b> </b><br></br><br></br>
                <label className="colorgris letra fa fa-envelope-o letrasmal divicionletra120 parrafo">   Enter your email </label><br></br><br></br>
                <label className="colorgris letra  fa fa-phone letrasmal divicionletra120 parrafo">  Enter your phone </label><br></br><br></br>
                <label className="colorgris letra  fa fa-globe letrasmal divicionletra120 parrafo">  Enter your web </label>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>

            <div className='col-md-6 '>

                <div className='derech'>
                    <div className="container fluid letra2 cabeceraderecha" ><h1 className="inputnombre">{/* Luis Paulino */}</h1></div>
                    <h5 className="letra2 colorgris parrafo"></h5><br></br><br></br><br></br><br></br><br></br>

                    <div>
                        <b className="letralarge letra2"> <b>EXPERIENCIA PROFECIONAL</b></b><br></br><br></br>
                        <div>
                            <ul className="ul">
                                <li className="colorazul parrafo"><h5 className="colorgris">Profecion</h5></li>
                                <div className="linea"></div>
                                <div className="divicionletra120">
                                    <label className="colorgris normal">Empleador</label>
                                    <label className="letrapequenaderecha">from-unit</label><br></br>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                            <ul className="ul">
                                <li className="colorazul parrafo"><h5 className="colorgris">Profecion</h5></li>
                                <div className="linea"></div>
                                <div className="divicionletra120">
                                    <label className="colorgris normal">Empleador</label>
                                    <label className="letrapequenaderecha">from-unit</label><br></br>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                        </div>

                        <br></br>
                        <div className="edu">
                            <b className="letralarge letra2"><b>EDUCACIÓN</b></b>
                            <ul className="ul margen10">
                                <div className="linea2"></div>
                                <li className="colorazul"><h5 className="colorgris">Institucion</h5></li>
                                <div className="cuboedu">
                                    <label className="letrapequenaabajo ">from-unit</label>
                                    <p className="parrafo colorgris">Grado</p>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                            <ul className="ul margen10">
                                <div className="linea2"></div>
                                <li className="colorazul"><h5 className="colorgris">Institucion</h5></li>
                                <div className="cuboedu">
                                    <label className="letrapequenaabajo ">from-unit</label>
                                    <p className="parrafo colorgris">Grado</p>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                        </div>

                        <br></br>
                        <div className="edu">
                            <b className="letralarge letra2"><b>Otros Estudios</b></b>
                            <ul className="ul margen10">
                                <div className="linea2"></div>
                                <li className="colorazul"><h5 className="colorgris">Institucion</h5></li>
                                <div className="cuboedu">
                                    <label className="letrapequenaabajo ">from-unit</label>
                                    <p className="parrafo colorgris">Titulo</p>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                            <ul className="ul margen10">
                                <div className="linea2"></div>
                                <li className="colorazul"><h5 className="colorgris">Institucion</h5></li>
                                <div className="cuboedu">
                                    <label className="letrapequenaabajo ">from-unit</label>
                                    <p className="parrafo colorgris">Titulo</p>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                            <ul className="ul margen10">
                                <div className="linea2"></div>
                                <li className="colorazul"><h5 className="colorgris">Institucion</h5></li>
                                <div className="cuboedu">
                                    <label className="letrapequenaabajo ">from-unit</label>
                                    <p className="parrafo colorgris">Titulo</p>
                                    <p className="colorgris letrapequena2 parrafo">Fecha Inicio y fin</p>
                                    <br></br><br></br>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}