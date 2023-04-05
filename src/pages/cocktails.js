import * as React from 'react';
import Cocktail from '../templates/cocktail';

export default function Cocktails() {
  return (
    <main class='bg-slate-900 h-screen p-8 flex flex-wrap justify-center'>
      <div className='p-10 m-0 relative border after:absolute after:border after:top-2 after:-right-5 after:bottom-2 after:-left-5'>
        <h1 className='text-4xl font-parklane text-amber-500'>Cocktails</h1>
        <Cocktail
          title='Manhattan'
          ingredients='bourbon whiskey, angostura bitters, sweet vermouth'
          description='Popular history suggests that the drink originated at the Manhattan
          Club in New York City in the mid-1870s, where it was invented by
          Iain Marshall for a banquet hosted by Jennie Jerome (Lady Randolph
          Churchill, mother of Winston) in honor of presidential candidate
          Samuel J. Tilden.'
        />
        <Cocktail
          title='Oaxaca Old-Fasioned'
          ingredients='mezcal, tequila, agave syrup, angostura bitters'
          description='Invented in 2007 by the tequila specialist Philip Ward at Death & Co. 
          in the East Village, this drink quickly appeared on menus across the country and became 
          a harbinger of the Mexican spirits’ ascendancy.'
        />
      </div>
    </main>
  );
}

export const Head = () => (
  <>
    <title>FDAD</title>
    <meta name='og:title' content='Family Day After Dark' />
    <meta name='og:image' content='https://familydayafterdark.xyz/icon.png' />
  </>
);
