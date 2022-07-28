import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import products from '../../utils/products.mock'


const ItemListContainer = ({ title }) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })

    useEffect(() => {
        getProducts
            .then((res) => {
                console.log("prods", res)
                setListProducts(res)
            })
            .catch((err) => {
                console.log("error en la llamada")
            })
            .finally(() => { })
    }, [])

    return (
        <section>
            <h2>{title}</h2>
            <ItemList dataProducts={listProducts} />
        </section>
    )
}

export default ItemListContainer