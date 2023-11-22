
function ShoppingList({shoppingCart}) {

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {
                    shoppingCart.map((item, index) => {
                        return <li key={index}>{item.name} - {item.price}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default ShoppingList;