import React from 'react'
import ProductItem from './ProductItem'
import ProductData from './ProductData'
const Products = ({card,setCard}) => {
  return (
    <div className='grid lg:grid-cols-3 gap-10 mb-8'>
        {ProductData.map((product)=>(
            <ProductItem key={product.id} product={product} card={card} setCard={setCard} />
        ))}
    </div>
  )
}

export default Products