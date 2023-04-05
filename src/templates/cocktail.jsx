import * as React from 'react';

export default function Cocktail({title, ingredients, description}) {
    return(
        <div className='text-gray-200 py-5'>
          <h2 className='text-lg'>{title}</h2>
          <h3 className='text-sm'>
            {ingredients}
          </h3>
          <p className='text-sm pt-3'>
            {description}
          </p>
        </div>
    )
}