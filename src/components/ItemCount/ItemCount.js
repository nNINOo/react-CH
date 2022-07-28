import './ItemCount.scss'
import { useState } from 'react'

const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(initial)    

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if(contador > 1 ) {
            setContador(contador - 1)
        }
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