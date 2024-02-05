"use client"
import { FaCartPlus, FaMinus, FaPlus } from 'react-icons/fa';
import Button from '@/components/smallUI/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';
const AddToCartButton = ({ product }) => {

    const dispatch = useDispatch()
    return (
        <button
            onClick={() => {
                dispatch(addToCart({ product }))
                toast.success("Added to Cart successfully")
            }}
            className='px-3 py-1 hover:bg-primary-800 border-2 rounded  duration-200 hover:text-white flex gap-x-1 items-center active:scale-[0.97]'
        >Add to Cart <FaCartPlus /></button>
    )
}

export default AddToCartButton