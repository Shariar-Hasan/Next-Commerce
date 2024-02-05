import ProductCard from '@/components/cards/ProductCard'
import Heading from '@/components/smallUI/Heading'
import { getProducts } from '@/utils/CRUD/products'
import React from 'react'

const Products = async () => {

  const result = await getProducts()
  const products = result.data
  return (
    <div className="max-w-7xl mx-auto my-10">
      <Heading>
        Product Shop
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-x-7 gap-x-3 gap-y-2 md:gap-y-6">
        {
          products?.map((product, index) => <div key={index} className="col-span-1">
            <ProductCard product={product} />
          </div>
          )
        }
      </div>
    </div>
  )
}


export default Products