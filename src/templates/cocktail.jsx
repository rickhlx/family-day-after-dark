import * as React from 'react';

export default function Cocktail({ title, origin, ingredients, description }) {
  return (
    <div className='text-gray-200 py-5'>
      <div className='flex flex-col justify-between place-content-center py-5'>
        <h2 className='basis-1/2 text-lg font-serif font-bold'>{title}</h2>
        <h3 className='basis-1/2 font-serif italic text-xs text-amber-500'>
          {origin}
        </h3>
      </div>
      <h3 className='text-xs font-sans italic text-gray-400'>{ingredients}</h3>
      <p className='text-sm pt-4 font-serif'>{description}</p>
    </div>
  );
}
