import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({data, action}) => {
    const {title, image, price} = data
    
    return(
        <div className='item-product'>
            <img src={`/assets/${image}`} alt='Imagen Producto' />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount/>
            <button className='btn-buy' onClick={action}>Comprar</button>
        </div>
    )
}

export default ItemProduct