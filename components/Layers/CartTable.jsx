
import { decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/slices/cartSlice'
import { numToBdt } from '@/utils/converters'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const CartTable = ({ cartItems }) => {
    const dispatch = useDispatch()
    return (
        <div className=' bg-front md:p-10 p-4 rounded-lg'>
            <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">My Cart</h1>
                <h2 className="font-semibold text-2xl">{cartItems.length || 0} Items</h2>
            </div>
            <div className="hidden md:flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
            </div>
            {
                cartItems?.length > 0 ?
                    cartItems?.map((product) => {
                        const {
                            id,
                            quantity,
                            title,
                            discountPrice,
                            regularPrice,
                            thumbnail
                        } = product
                        return <div key={id} className="flex items-center hover:bg-back rounded-md -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="hidden md:inline-block w-20">
                                    <Image width={700} height={700} className="h-24" src={thumbnail} alt={title} />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">{title}</span>
                                    <span onClick={() => dispatch(removeFromCart({ product }))} className="font-semibold hover:text-red-500 text-gray-500 text-xs duration-200 cursor-pointer">Remove</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center w-1/5 text-gray-500">
                                <button
                                    onClick={() => dispatch(decrementQuantity({ product }))} >
                                    <FaMinus />
                                </button>

                                <input className="mx-2 border text-center w-8" type="text" readOnly value={quantity} defaultValue={quantity} />
                                <button onClick={() => dispatch(incrementQuantity({ product }))} >
                                    <FaPlus />
                                </button>

                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">{numToBdt(discountPrice ? discountPrice : regularPrice)}</span>
                            <span className="text-center w-1/5 font-semibold text-sm">{numToBdt((discountPrice ? discountPrice : regularPrice) * quantity)}</span>
                        </div>
                    })
                    : <div className='p-3'>
                        <div className='border text-center py-10'>
                            <h5 className='text-xl mb-2'>No item in cart</h5>
                            <Link className='bg-primary-500 text-white rounded-md px-2 py-1' href={"/products"}>Keep Shopping</Link>
                        </div>

                    </div>
            }
        </div>
    )
}

export default CartTable