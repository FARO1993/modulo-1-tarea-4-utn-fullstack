import './Tarjeta.css'

function Tarjeta({ nombre, profesion, imagen, descripcion }) {
  return (
    <article className="tarjeta">
      <div className="tarjeta__imagen-wrapper">
        <img
          className="tarjeta__imagen"
          src={imagen}
          alt={`Foto de perfil de ${nombre}`}
        />
      </div>
      <div className="tarjeta__contenido">
        <h2 className="tarjeta__nombre">{nombre}</h2>
        <h3 className="tarjeta__profesion">{profesion}</h3>
        <p className="tarjeta__descripcion">{descripcion}</p>
      </div>
    </article>
  )
}

export default Tarjeta