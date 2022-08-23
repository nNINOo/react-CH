import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemProduct = ({ data, action }) => {
    const { title, image, price, stock, id } = data

    return (
        <div className='item-product'>
            <Link to={`/productos/${id}`}>
                <img src={`/assets/${image}`} alt='Imagen Producto' />
                <p className='titulo-card'>{title}</p>
            </Link>
            <span>$ {price}</span>
            <ItemCount stock={stock} initial={1} />
            <button className='btn-buy' onClick={action}>Añadir al carrito</button>
        </div>
    )
}

export default ItemProduct