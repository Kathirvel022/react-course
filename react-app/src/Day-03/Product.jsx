

function Product(props){
    return(
        <div>
            <h1>Product</h1>
            <img src={props.image} alt="" />
            <h1>Product name:{props.name}</h1>
            <h1>Price: ${props.price}</h1>
        </div>
    );
}
export default Product