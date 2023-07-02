import '../App.css'

const ItemListContainer = (props) => {
    return (
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <h2>{props.greeting}</h2>
      </div>
    );
  };
  
  export default ItemListContainer;