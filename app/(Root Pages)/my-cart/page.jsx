
// import CartSummeryBox from '@/app/components/layers/CartSummeryBox'
// import CartTable from '@/app/components/layers/CartTable'
// import Heading from '@/app/components/smallUI/Heading'
import Heading from '@/app/components/smallUI/Heading'
import React from 'react'

const MyCart = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Heading>
                My Cart
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 my-10">
                <div className="col-span-1 md:col-span-3">
                    <CartTable />
                </div>

                <div className="col-span-1 md:p-10 p-4  rounded-lg bg-front">
                    <CartSummeryBox />
                </div>
            </div>
        </div>
    )
}

export default MyCart