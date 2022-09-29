import React from "react";

const Header = (props) => {
    var result = props.data.reduce(function (acc, obj) { return acc + obj.cartData.price; }, 0);
    return (
        <>
            {
                props.data.length > 0 && <h1>Checkout:</h1>
            }
            {
                props.data.length > 0 && props.data.length && result
            }
        </>
    )
};

export default Header;