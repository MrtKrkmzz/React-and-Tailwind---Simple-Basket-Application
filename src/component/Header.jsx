import React from 'react'
import CardIcon from './CardIcon'


const Header = ({card}) => {
  return (
    <div className='flex justify-between item-center mb-6'>
        <h1 className='text-3xl font-semibold'>React ve Tailwind Sepet Uygulaması</h1>
       <CardIcon card={card}/>
    </div>
  )
}

export default Header