import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react"
import { Link } from  'react-router-dom'

const ItemDetail = ({data}) => {

    const [selectedAmount, setSelectedAmount] = useState(0)

    return(
        <>
            <img src={`/assets/${data.image}`} />
            <h1>{data.title}</h1>
            <h2>$ {data.price}</h2>
            {console.log("Cantidad Seleccionada: ", selectedAmount)}
            {
                selectedAmount > 0 
                ? <Link to="/cart"><button className='btn-finally-buy'> Terminar Compra </button></Link> 
                : <ItemCount stock={data.stock} initial={0} setSelectedAmount={setSelectedAmount}/>
            }
        </>
    )
}

export default ItemDetail