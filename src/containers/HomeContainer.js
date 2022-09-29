import Items from "../components/Items";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../servics/actions/action";

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeFromCart(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Items)