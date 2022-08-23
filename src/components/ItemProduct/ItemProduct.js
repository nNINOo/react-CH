import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemProduct = ({ data, action }) => {
    const { title, image, price, id } = data

    return (
        <div className='item-product'>
            <img src={`/assets/${image}`} alt='Imagen Producto' />
            <p className='titulo-card'>{title}</p>
            <span>$ {price}</span>
            <Link to={`/productos/${id}`}>
                <button className='btn-buy'>Ver Producto</button>
            </Link>
        </div>
    )
}

export default ItemProduct