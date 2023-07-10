import { Item } from '../components/Item'

export const ItemList = ({products}) => 
    products.map(lentes => <Item key={lentes.id} lentes={lentes} />)
