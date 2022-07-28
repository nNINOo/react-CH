import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({data, action}) => {
    const {title, image, price, stock} = data
    
    return(
        <div className='item-product'>
            <img src={`/assets/${image}`} alt='Imagen Producto' />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stock={stock} initial={1}/>
            <button className='btn-buy' onClick={action}>Añadir al carrito</button>
        </div>
    )
}

export default ItemProduct