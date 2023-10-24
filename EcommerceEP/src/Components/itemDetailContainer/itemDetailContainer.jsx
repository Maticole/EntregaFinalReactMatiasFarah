import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(json => {
            setProducto(json)
            console.log (json)
                })
                .catch(error => console.error(error))
                .finally (() => setLoading(false)) 
    }, [id])

    return(
        <>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            <>
            {producto ? (
        <>
        <h3>Soy el producto {producto?.title}</h3>
        <p>descripcion: {producto?.description}</p>
        </>
        ) : (
            <p>El producto con id: {id} no existe</p>
        )}
        </>
    )}
    </>
    )
}

export default ItemDetailContainer