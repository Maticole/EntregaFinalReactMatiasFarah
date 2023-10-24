
import CartWidget from '../cartWidget/cartWidget';
import styles from './styles.module.css'
// import { link } from 'react-router-dom';



const NavBar = () => {

    const arrayDeCategorias = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]


    return (
        <div className={styles.navbar}>
            <p>(Entreparentesis)</p>
            {arrayDeCategorias.map((cat, index) => <p key={index}>{cat}</p> )}
            
                    <CartWidget />


        </div>

    )
}

export default NavBar