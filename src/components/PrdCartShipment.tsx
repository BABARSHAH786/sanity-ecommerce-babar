import Link from 'next/link'
import React from 'react'

export const PrdCartShipment = ({product:product}: {product:any}) => {
  return (
    <div className='bg-white shadow-md rounded-md p-4 flex justify-around' >
        <img src="https://www.shutterstock.com/image-vector/shipping-box-icon-260nw-2097343254.jpg" alt="" />
        <div>
            {/* <h2 className='text-lg font-semibold'>{product.title} </h2> */}
            {/* <h2 className='text-sm font-semibold'>{product.description} </h2> */}
            {/* <p className='mt-4 text-sm bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded cursor-pointer'>{product.price} </p> */}
            <Link  href={'/'}>Track order</Link>
        </div>
        PrdCartShipment</div>
  )
}
