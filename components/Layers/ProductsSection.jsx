import { getProducts } from "@/utils/CRUD/products"
import { numToBdt } from "@/utils/converters"
import Image from "next/image"
import ProductCard from "../cards/ProductCard"
import Heading from "../smallUI/Heading"
import Link from "next/link"

const ProductsSection = async () => {

    const result = await getProducts()
    const products = result.data.slice(0, 5)
    return (
        <div className="max-w-7xl mx-auto">
            <Heading >
                Product Listings
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-7 gap-x-3 gap-y-2 md:gap-y-6">
                {
                    products?.map((product, index) => <div key={index} className="col-span-1">
                        <ProductCard product={product} />
                    </div>
                    )
                }
            </div>
            <div className="flex justify-center mt-3">
                <Link href={"/products"} className="px-2 py-1 border relative 
                after:absolute after:top-1/2 after:left-full after:translate-y-[-50%] after:w-full after:h-[2px] after:bg-gray-500
                before:absolute before:top-1/2 before:right-full before:translate-y-[-50%] before:w-full before:h-[2px] before:bg-gray-500 rounded-md duration-200 hover:bg-primary-600 hover:text-white
                ">
                    view more
                </Link>
            </div>
        </div>
    )
}

export default ProductsSection