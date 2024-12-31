import React from 'react'
import { PrdCartShipment } from './PrdCartShipment'

export const ShipmentOrder = () => {
    const products = [
        {
          id: 1,
          title:'NEW PRODUCT',
          name: 'Product 1',
          description: 'This is description',
          price: 10,
          trackingNumber: '1234567890',
        },
        {
            id: 2,
            title:'NEW PRODUCT',
            name: 'Product 1',
            description: 'This is description',
            price: 10,
            trackingNumber: '1234567590',
          },
          {
            id: 3,
            title:'NEW PRODUCT',
            name: 'Product 1',
            description: 'This is some description',
            price: 10,
            trackingNumber: '1234567590',
          },
          {
            id: 4,
            title:'NEW PRODUCT',
            name: 'Product 1',
            description: 'This is few description',
            price: 10,
            trackingNumber: '1284567590',
          },
    ]
  return (
    <>
    <main className='mx-6 lg:mx-48 my-10 grid-cols-1 gap-6'>
    {products.map(product => (
        <PrdCartShipment key={product.id} product={product} />
        ))}
        </main>
    </>
  )
}
