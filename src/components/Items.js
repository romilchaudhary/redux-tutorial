import React from "react";

const Items = (props) => {
    console.log("items:", props)
    return (
        <>
            <p>Price: 1000</p>
            <p>Name: Iphone</p>
            <button onClick={() => props.addToCartHandler({'price':1000, 'name': "iphone"})}>Add To Cart</button>
            <button onClick={() => props.removeToCartHandler()}>Remove To Cart</button>
        </>
    )
};

export default Items;