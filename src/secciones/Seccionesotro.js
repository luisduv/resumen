
export function Seccionesotro({ data }) {
    return data.map((e) => (
        <ul className="ul margen10">
            <div className="linea2"></div>
            <li className="colorazul"><h5 className="colorgris">{e.institucionotro}</h5></li>
            <div className="cuboedu">
                <label className="letrapequenaabajo ">from-unit</label>
                <p className="parrafo colorgris"> {e.educationotro}</p>
                <p className="colorgris letrapequena2 parrafo">{e.fechainiciootro + " - " + e.fechafinotro}</p>
                <br></br><br></br>
            </div>
        </ul>
    ));
}