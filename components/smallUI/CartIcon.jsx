import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6"
import { useSelector } from "react-redux"

const CartIcon = () => {
    const { cartItems } = useSelector(state => state.cart)
    return (
        <Link title="My Cart" href={"/my-cart"} className="text-xl mx-2 relative">
            <FaCartShopping />
            {
                cartItems.length > 0 && <span className="absolute top-[-7px] right-[-7px] animate-ping p-1 bg-primary-700 text-white w-3 aspect-square rounded-full"></span>
            }

        </Link>
    )
}

export default CartIcon