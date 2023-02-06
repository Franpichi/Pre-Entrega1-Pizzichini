import { Link } from "react-router-dom"
export const Item = ({item}) => {
  return (
    <div className="card mb-3 border-light">
        <img src={`../img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.Nombre}`} />
            <div className="card-body cardBody">
                <h3 className="card-title">{item.Nombre}</h3>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className="btn"><Link className="nav-link" to={`/item/${item.id}`}>Más Información</Link></button>

            </div>
      </div>

  )
}