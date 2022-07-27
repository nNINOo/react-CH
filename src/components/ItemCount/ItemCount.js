import './ItemCount.scss'
import { useState } from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(1)

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }
    return (
        <div className='count'>
            <button className='b-count' onClick={removeNumber}>-</button>
            <p>{contador}</p>
            <button className='b-count' onClick={addNumber}>+</button>
        </div>
    )
}

export default ItemCount