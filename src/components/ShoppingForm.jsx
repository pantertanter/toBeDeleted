import {useRef} from 'react';

function ShoppingForm({shoppingCart, setShoppingCart}) {

    const itemRef = useRef(null);
    const priceRef = useRef(null);

    return (
        <div>
            <input type="text" placeholder="Item Name" ref={itemRef}/>
            <input type="text" placeholder="Price" ref={priceRef}/>
            <button onClick={() => {
                setShoppingCart(
                    [...shoppingCart, {
                        name: itemRef.current.value,
                        price: priceRef.current.value
                    }]
                )
            }}>Add to chart</button>
        </div>
    );
}

export default ShoppingForm;