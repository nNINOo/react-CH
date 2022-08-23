import './ItemDetail.scss'

const ItemDetail = ({data}) => {

    return(
        <>
            <img src={`/assets/${data.image}`} />
            <h1>{data.title}</h1>
            <h2>$ {data.price}</h2>
        </>
    )
}

export default ItemDetail