import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {

    const { getTotalItems } = useCartContext();

    return <nav>
        <ul>
            <li>
                <Link to={"/"}> Inicio </Link>
            </li>
             <li>
                <Link to={"/category/remera"}> Remeras </Link>
            </li>
            <li>
                <Link to={"/category/pantalon"}> Pantalones </Link>
            </li>
            <li>
                <Link to={"/category/buzo"}> Buzos </Link>
            </li>
            <li>
                <Link to={"/category/campera"}> Camperas </Link>
            </li>
            <li>
                <Link to={"/carrito"}> Carrito </Link>
                { getTotalItems() > 0 && ( <span className="in-cart"> { getTotalItems() } </span> ) }
            </li>
        </ul>
    </nav>
}