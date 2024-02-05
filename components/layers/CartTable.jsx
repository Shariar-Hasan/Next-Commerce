"use client"

import { decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/slices/cartSlice'
import { numToBdt } from '@/utils/converters'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const CartTable = () => {
    const dispatch = useDispatch()
    const {
        cartItems,
        totalPrice,
        shippingCost
    } = useSelector(state => state.cart)
    const pathname = usePathname()
    const isCheckoutPage = pathname === '/checkout'
    return (
        <div className='bg-front md:p-10 p-4 rounded-lg shadow-md'>
            <div className="overflow-x-auto w-full">
                <table className='w-full'>

                    {/* <CartTableBody /> */}
                    <thead>
                        <tr className='text-center'>
                            <th className='text-left py-1'>Product Details</th>
                            <th className=' py-1'>Quantity</th>
                            {!isCheckoutPage && <th className=' py-1'>Price</th>}
                            <th className='text-right py-1'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems?.length > 0
                                ? cartItems?.map((product) => {
                                    const { title, quantity, regularPrice, discountPrice, thumbnail } = product
                                    return <tr className='text-center'>
                                        <td className='text-left  py-3 px-2'>
                                            <div className="flex w-2/5">
                                                <div className="hidden md:inline-block  relative">
                                                    {/* <Image width={700} height={700} className="w-[100px]" src={thumbnail} alt={title} /> */}
                                                    <img className="w-[100px]" src={thumbnail} alt={title} />
                                                </div>
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <span className="font-bold text-sm">{title}</span>
                                                    <span onClick={() => dispatch(removeFromCart({ product }))} className="font-semibold hover:text-red-500 text-gray-500 text-xs duration-200 cursor-pointer">Remove</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' py-3 px-2'>
                                            {isCheckoutPage
                                                ? <span >{quantity}</span>
                                                : <div className="flex justify-center items-center  text-gray-500">
                                                    <button
                                                        onClick={() => dispatch(decrementQuantity({ product }))} >
                                                        <FaMinus />
                                                    </button>

                                                    <input className="mx-2 border text-center w-8" type="text" readOnly value={quantity} defaultValue={quantity} />
                                                    <button onClick={() => dispatch(incrementQuantity({ product }))} >
                                                        <FaPlus />
                                                    </button>

                                                </div>}

                                        </td>
                                        {!isCheckoutPage && <td className=' py-3 px-2'>
                                            <span className="text-center w-1/5 font-semibold text-sm">{numToBdt(discountPrice ? discountPrice : regularPrice)}</span>
                                        </td>}

                                        <td className='text-right py-3 px-2'>
                                            <span className="text-center w-1/5 font-semibold text-sm">{numToBdt((discountPrice ? discountPrice : regularPrice) * quantity)}</span>
                                        </td>
                                    </tr>
                                })
                                : <tr>
                                    <td colSpan={100}>
                                        <div className=''>
                                            <div className='border text-center py-10'>
                                                <h5 className='text-xl mb-2'>No item in cart</h5>
                                                <Link className='bg-primary-500 text-white rounded-md px-2 py-1' href={"/products"}>Keep Shopping</Link>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                        }

                    </tbody>
                </table>
                {
                    isCheckoutPage && <div className='border-t-2 flex flex-wrap justify-between font-bold'>
                        <span>Total</span>
                        <span>{numToBdt(totalPrice + shippingCost)}</span>
                    </div>
                }

            </div>
            {/* <div className='overflow-x-auto'>
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
            </div> */}

        </div>
    )
}

export default CartTable