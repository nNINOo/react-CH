import './ItemCount.scss'
import { useState } from 'react'

const ItemCount = ({ stock, setSelectedAmount }) => {

    const [contador, setContador] = useState(0)

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        setSelectedAmount(contador)
    }
    return (
        <>
            <div className='count'>
                <button className='b-count' onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button className='b-count' onClick={addNumber}>+</button>
            </div>
            <button className='btn-buy' onClick={onAdd}>Añadir al carrito</button>
        </>
    )
}

export default ItemCount