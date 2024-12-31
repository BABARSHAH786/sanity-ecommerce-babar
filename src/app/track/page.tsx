// import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export const track = () => {
    // const {trackingNumber} = useParams();
    const [orderData,setOrderData] =useState([
        {
            eventDescription:'Order Confirmed',
            city:'New York',
        },
        {
            eventDescription:'Order Shipped',
            city:'Karachi',
        }
    ])
  return (
    <div>track numer:
       {/* {trackingNumber} */}
       </div>
  )
}
