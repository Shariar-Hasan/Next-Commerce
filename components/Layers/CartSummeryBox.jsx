import { numToBdt } from '@/utils/converters'
import React from 'react'
import LinkButton from '../smallUI/LinkButton'

const CartSummeryBox = ({ cartItems, totalPrice }) => {
    let shippingCost = cartItems.length > 0 ? 100 : 0
    return (
        <div>
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items {cartItems.length || 0}</span>
                <span className="font-semibold text-sm">{numToBdt(totalPrice)}</span>
            </div>
            <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Shipping Cost </span>
                <span className="font-semibold text-sm">{numToBdt(shippingCost)}</span>
            </div>
            <div className="border-t flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Total Cost </span>
                <span className="font-semibold text-sm">{numToBdt(totalPrice + shippingCost)}</span>

            </div>
            <LinkButton href='/checkout' className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
            </LinkButton>
        </div>
    )
}

export default CartSummeryBox