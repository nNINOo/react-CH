import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react"
import { Link } from  'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const ItemDetail = ({data}) => {

    const {addToCart, cart} = useContext(CartContext)

    const {image, title, price, stock} = data

    const [contador, setContador] = useState(0)

    const [add, setAdd] = useState(false)

    return(
        <>
            <img src={`/assets/${image}`} />
            <h1>{title}</h1>
            <h2>$ {price}</h2>
            {contador > 0 && add && <Link to="/cart"><button className='btn-finally-buy' onClick={()=>addToCart({count: contador, ...data})}> Terminar Compra </button></Link>}

            <ItemCount stock={stock} initial={0} setContador={setContador} contador={contador} add={add} setAdd={setAdd}/>
            
        </>
    )
}

export default ItemDetail