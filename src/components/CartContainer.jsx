
import CartItems from "./CartItems";
import CartWidget from "./CartWidget";


const CartContainer = () => {
    return(
        <div className="bg-danger rounded-circle p-3 position-relative">
             <CartWidget />
             <CartItems count={5}/>
            
        </div>
    )
}

export default CartContainer;