import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Checkout = () => {

    const { cart } = useContext(CartContext)

    return (
        <>
            <div>
                <h3> Pagina de Checkout </h3>
                {cart.map((product, index) => (
                    <div>
                        <img src={`/assets/${product.image}`} alt={product.title} />
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
            <p>Cantidad de Productos: {cart.reduce((prev, current)=> current.count + prev, 0)}</p>
            <p>Precio Total: {cart.reduce((prev, current)=> (current.price * current.count) + prev, 0)}</p>
        </>
    )
}

export default Checkout