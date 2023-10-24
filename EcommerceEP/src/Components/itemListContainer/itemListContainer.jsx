// import { Button } from "antd"
import { useEffect, useState } from "react";
import {Spin} from 'antd';
import Item from "../item/item";
import styles from './styles.module.css';
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

        const [products, setProducts] = useState([])
        const [loading, setLoading] = useState(true)

    

        useEffect(() => {
            const url = `https://fakestoreapi.com/products`
            fetch(url)
            .then(response => response.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
                setLoading(false)
            })
            .catch(error => console.error(error))
            },[])

            if(loading) return <Spin/>

return (
    <div className={styles.container}>
        {products.map((pr, index) => <Item producto={pr} key={index}/>)}
    </div>
)
}
export default ItemListContainer