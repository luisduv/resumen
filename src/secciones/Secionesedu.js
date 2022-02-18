
export function Seccionesedu({ data }) {
    return data.map((e) => (
        <ul className="ul margen10">
            <div className="linea2"></div>
            <li className="colorazul"><h5 className="colorgris">{e.institucion}</h5></li>
            <div className="cuboedu">
                <label className="letrapequenaabajo ">from-unit</label>
                <p className="parrafo colorgris"> {e.education}</p>
                <p className="colorgris letrapequena2 parrafo">{e.fechainicioedu + " - " + e.fechafinedu}</p>
                <br></br><br></br>
            </div>
        </ul>
    ));
}