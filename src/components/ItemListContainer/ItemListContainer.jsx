import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Hubo un problema al buscar productos");
                }

                return response.json();
            })
            .then((data) => {
                if (category) {
                    setProducts(data.filter(prod => prod.category === category));
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }, [category])


    return (
        <section className="item-list-container"> 
            <h1> Bienvenidos a Estilo </h1>
            <div>
                <ItemList list={products} />
            </div>
        </section>
    );
}