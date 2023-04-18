import React from "react";

const Card = ({card,setCard}) => {
  const total = card.reduce((acc, item)=> acc+item.price,0)
  if(card.length === 0)return
  {
    return (
      <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Sepet</h2>
        <ul>
          {card.map(item=>(
           <li className="mt-2 flex justify-between">
           <span>{item.name}</span>
           <span>{item.price}</span>
         </li>
          ))}
        </ul>
        <hr className="my-4" />
        <p>Toplam: {total}</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition-all mt-4" onClick={()=>{setCard([])}}>Sepeti Boşalt</button>
      </div>
    );
  }
};

export default Card;
