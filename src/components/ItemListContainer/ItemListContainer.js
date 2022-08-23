import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import products from '../../utils/products.mock'
import { useParams } from "react-router-dom"


const ItemListContainer = ({ title }) => {

    const { category } = useParams();

    const [listProducts, setListProducts] = useState([])

    const filterCategory = products.filter((product) => product.category === category)

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            if (category) {
                resolve(filterCategory)
            } else {
                resolve(products)
            }
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
    }, [category])

    return (
        <section>
            <h2>{title}</h2>
            <ItemList dataProducts={listProducts} />
        </section>
    )
}

export default ItemListContainer