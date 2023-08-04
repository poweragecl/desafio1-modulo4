function Tags({colorFondo, texto}){
    return(
        <span className={`badge ${colorFondo}`}> {texto}</span>
    )
}

export default Tags