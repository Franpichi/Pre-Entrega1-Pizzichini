import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()

    useEffect(() => {
        if(idCategoria) {
            fetch('../json/Products.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = ItemList({products}) 
                setProductos(productsList)
            })
        } else {
            fetch('../json/Products.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}