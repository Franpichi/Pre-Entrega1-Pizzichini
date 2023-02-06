import { Item } from "../Item/Item"
export const ItemList = ({products}) => {
  return (
    <>
        {products.map(products => <Item item={products} key={products.id}/>)}
    </>
  )
}