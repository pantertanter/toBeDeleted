import {useState} from 'react';
import ShoppingForm from "./ShoppingForm.jsx";
import ShoppingList from "./ShoppingList.jsx";

function Shopping() {

    const initialShoppingCart = [
        {name: "Apples", price: 2.99},
        {name: "Oranges", price: 3.99},
        {name: "Pears", price: 4.99},
        {name: "Grapes", price: 5.99},
    ]

const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);


return (
    <>
        <ShoppingList shoppingCart={shoppingCart}/>
        <ShoppingForm shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
    </>
);
}

export default Shopping;