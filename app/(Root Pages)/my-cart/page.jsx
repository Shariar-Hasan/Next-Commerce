"use client"
import CartSummeryBox from '@/components/layers/CartSummeryBox'
import CartTable from '@/components/layers/CartTable'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyCart = () => {
    const {
        cartItems,
        totalPrice
    } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 shadow-md my-10">
                <div className="col-span-1 md:col-span-3">
                    <CartTable cartItems={cartItems} />
                </div>

                <div className="col-span-1 md:p-10 p-4  rounded-lg bg-front">
                    <CartSummeryBox cartItems={cartItems} totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    )
}

export default MyCart