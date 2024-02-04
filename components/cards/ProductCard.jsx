"use client"
import { numToBdt } from '@/utils/converters'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../smallUI/Button'
import { FaCartArrowDown, FaArrowRight, } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'

const ProductCard = ({ product }) => {
    const {
        id,
        slug,
        title,
        thumbnail,
        discountPrice,
        regularPrice
    } = product
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        // /Card Section
        <div className="min-h-32 bg-front border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
            {discountPrice && regularPrice !== 0 && <span className="bg-primary-600 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:text-sm rounded-bl-md">
                {(((regularPrice - discountPrice) / regularPrice) * 100).toFixed(1)} % discount
            </span>}
            <div className="overflow-hidden p-2 rounded-md">
                <Image src={thumbnail} width={800} height={800} className="w-full" alt={title} />

            </div>
            <div className="px-2 py-3">
                <h5 className="text-base font-semibold text-center">
                    {title}
                </h5>
                <p className="text-center text-xs font-semibold flex justify-center gap-2">
                    {
                        discountPrice
                            ? <>
                                <del className='text-gray-500'>
                                    {numToBdt(regularPrice)}
                                </del>
                                <span>
                                    {numToBdt(discountPrice)}
                                </span>
                            </>
                            : <span>{numToBdt(regularPrice)}</span>
                    }
                </p>
                {/* Footer buttons */}
                <div className='text-sm flex justify-between flex-wrap mt-1'>
                    <button onClick={() => dispatch(addToCart({ product }))} className='flex items-center px-2 py-1  gap-x-2 bg-primary-600 border-2 border-primary-600 hover:bg-transparent rounded text-white hover:text-inherit'>
                        Add to cart <FaCartArrowDown />
                    </button >
                    <button onClick={() => router.push(`/products/${slug}`)} className='flex items-center px-2 py-1  gap-x-2 bg-primary-600 border-2 border-primary-600 hover:bg-transparent rounded text-white hover:text-inherit'>
                        View <FaArrowRight />
                    </button >
                </div>
            </div>
        </div>
    )
}

export default ProductCard