import { getProducts } from "@/utils/CRUD/products"
import { numToBdt } from "@/utils/converters"
import Image from "next/image"
import ProductCard from "../cards/ProductCard"

const ProductsSection = async () => {

    const result = await getProducts()

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-7 gap-x-3 gap-y-2 md:gap-y-6">
                {
                    result?.data?.map((product, index) => <div key={index} className="col-span-1">
                        <ProductCard product={product} />
                    </div>
                    )
                }
            </div>

        </div>
    )
}

export default ProductsSection