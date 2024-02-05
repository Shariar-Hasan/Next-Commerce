import parse from 'html-react-parser';
import { getSingleProduct } from "@/utils/CRUD/products"
import { numToBdt } from "@/utils/converters"
import Image from "next/image"

const ProductDetails = async ({ params }) => {
    const { slug } = params
    const result = await getSingleProduct(slug)
    const product = result.data
    const {
        title,
        description,
        shortDescription,
        images,
        thumbnail,
        regularPrice,
        discountPrice,
        storageOptions,
        variants
    } = product
    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-front shadow-sm rounded-md">
                        <div className="h-[460px] rounded-lgdark:bg-gray-700 mb-4">
                            <Image className="w-full h-full object-cover" width={1000} height={1000} src={thumbnail} alt={title} />
                        </div>
                    </div>
                    <div className="p-4 bg-front shadow-sm rounded-md">
                        <h2 className="text-2xl font-bold  mb-2">{title}</h2>
                        <p className=" text-sm mb-4 ">
                            {shortDescription}
                        </p>
                        <div className="flex mb-4">
                            <div className="">
                                <span className="font-bold ">Price:</span>
                                {
                                    discountPrice
                                        ? <span className=" flex ml-1 gap-2">
                                            <del>{numToBdt(regularPrice)}</del>
                                            <span>{numToBdt(discountPrice)}</span>
                                        </span>
                                        : <span className="text-gray-600 dark:text-gray-300">
                                            {numToBdt(regularPrice)}
                                        </span>
                                }

                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Stroage :</span>
                            <div className="mt-2">
                                <div className="inline-block">
                                    {
                                        storageOptions?.map((storage) => <button key={storage} className="bg-back first:rounded-l-md last:rounded-r-md border px-4 py-1 duration-200 hover:bg-primary-300">
                                            {storage} GB
                                        </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Varients:</span>
                            <div className="flex items-center mt-2">
                                {
                                    variants?.map((variant) => <button
                                    key={variant} className="bg-back first:rounded-l-md last:rounded-r-md border px-4 py-1 duration-200 hover:bg-primary-300">
                                        {variant}
                                    </button>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <div className="prose" >
                                {parse(description)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails