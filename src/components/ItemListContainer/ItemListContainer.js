import './ItemListContainer.scss'
import ItemProduct from '../ItemProduct/ItemProduct'

const ItemListContainer = ({title}) => {
    const product1 = {
        title: "Producto 1",
        price: 1,
        image: "",
        stock: 10
    }
    const product2 = {
        title: "Producto 2",
        price: 1,
        image: "",
        stock: 10
    }
    return (
        <section>
            <h2>{title}</h2>
            <ItemProduct data={product1}/>
            <ItemProduct data={product2}/>
        </section>
    )
}

export default ItemListContainer