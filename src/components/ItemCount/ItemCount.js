import './ItemCount.scss'

const ItemCount = ({ stock, contador, setContador, add, setAdd}) => {

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
    

    return (
        <>
            <div className='count'>
                {!add && <button className='b-count' onClick={()=>removeNumber()}>-</button>}
                <p>{contador}</p>
                {!add && <button className='b-count' onClick={()=>addNumber()}>+</button>}
            </div>
            {contador > 0 && !add && <button className='btn-buy' onClick={()=>{setAdd(true)}} >Añadir al carrito</button>}
        </>
    )
}

export default ItemCount