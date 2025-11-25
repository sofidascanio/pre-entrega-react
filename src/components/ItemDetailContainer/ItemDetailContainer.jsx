import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";


export const ItemDetailContainer = () => {
    const [ detail, setDetail ] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then((detail) => setDetail(detail))
            .catch(() => {});
    }, [id]);

    return (
        <main className="item-detail-container">
            {Object.keys(detail).length ? <ItemDetail detail={detail} /> : <p className="loading-message"> Cargando ... </p>}
        </main>
    );
}