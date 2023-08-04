import Tags from "./Tags"

function Card({src, nombre, descripcion, texto, colorFondo}){
    return(
        <div className="card p-3 mb-4">
            <img src={src} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>

            <Tags texto={texto} colorFondo={colorFondo}></Tags>

        </div>
    )
}

export default Card