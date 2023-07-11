export const ItemDetail = ({lentes}) => {
    return ( 
    <>
        <div>{lentes.id}</div>
        <div>{lentes.modelo}</div>
        <div>{lentes.precio}</div>
        <div>{lentes.category}</div>
        <img src={lentes.img} alt={lentes.modelo}/>
    </>
    )
}
