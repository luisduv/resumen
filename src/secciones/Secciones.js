

export function Secciones({ data}){
    return data.map((e) => (
        <ul className="ul">
            <li className="colorazul parrafo"><h5 className="colorgris">{e.profecionPrueba }</h5></li>
            <div className="linea"></div>
            <div className="divicionletra120">
                <label className="colorgris normal">{e.empleador }</label>
                <label className="letrapequenaderecha">from-unit</label><br></br>
                <p className="colorgris letrapequena2 parrafo">{e.fechainicio   + " - " + e.fechafin }</p>
                <br></br><br></br>
            </div>
        </ul>
    ));
}