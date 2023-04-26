import * as React from 'react';
import Cocktail from '../templates/cocktail';

export default function Cocktails() {
  return (
    <main class='bg-slate-900 p-5 flex flex-wrap justify-center'>
      <div
        className='md:max-w-sm mx-auto max-w-xs p-5 m-0
                  relative border after:absolute after:border 
                  after:top-1 after:-right-2 after:bottom-1 after:-left-2'>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-parklane text-amber-500 pb-5 self-center pt-5'>
            Cocktails
          </h1>
          <p className='text-gray-200 font-serif text-sm text-justify pb-5'>
            Cocktails are an integral part of our social and cultural fabric,
            with a history that stretches back decades or even centuries. The
            world of mixology is constantly evolving, with new ingredients,
            techniques, and flavors being introduced all the time. By
            understanding the history and origins of classic cocktails, we can
            appreciate the craft and skill that goes into creating them and also
            gain a deeper understanding of how mixology has evolved over time.
          </p>
          <hr />
        </div>
        <Cocktail
          title='Manhattan'
          origin='Manhattan Club - c.1870'
          ingredients='bourbon whiskey, angostura bitters, sweet vermouth'
          description='Popular history suggests that the drink originated at the Manhattan
          Club in New York City in the mid-1870s, where it was invented by
          Iain Marshall for a banquet hosted by Jennie Jerome (Lady Randolph
          Churchill, mother of Winston) in honor of presidential candidate
          Samuel J. Tilden.'
        />
        <Cocktail
          title='Oaxaca Old-Fasioned'
          origin='Death & Co., NY - c.2007'
          ingredients='mezcal, tequila, agave syrup, angostura bitters'
          description='Invented in 2007 by the tequila specialist Philip Ward at Death & Co. 
          in the East Village, this drink quickly appeared on menus across the country and became 
          a harbinger of the Mexican spirits’ ascendancy.'
        />
        <Cocktail
          title='New York Sour'
          origin='Chicago - c.1870'
          ingredients='bourbon whiskey, lemon, sugar, red wine'
          description='The New York Sour updates the Whiskey Sour recipe (whiskey, lemon, sugar, 
          egg white) with a float of dry red wine. The wine lends its aromatic qualities and 
          deep red color to the drink. Reports trace the New York Sour back to the 1870s or 1880s, 
          although it operated under other names during this time, including the Continental Sour. 
          It’s possible that the New York Sour was created in Chicago, but in time, the New York 
          label grabbed on and never let go.'
        />
        <Cocktail
          title='White Lady'
          origin='Ciro’s Club, London - c.1919'
          ingredients='orange liqueur, lemon, gin'
          description='The white lady was made in honor of Eveline Alice Wander Gorkiewicz, who helped 
          British prisoners of war escape Turkey in the first world war. She would dress up as an old 
          Turkish wash lady (dressed in white) and hide the prisoners in the washing trolley. The drink 
          was named by the soldiers she rescued. The original recipe for the white lady was devised by 
          Harry MacElhone in 1919 at Ciro’s Club in London.'
        />
        <Cocktail
          title='Negroni'
          origin='Caffè Giacosa - c.1919'
          ingredients='gin, campari, sweet vermouth'
          description='The drink’s origins are not known with certainty. The most widely reported account is that 
          it was first mixed in Florence, Italy, in 1919, at Caffè Giacosa . The commonly-held origin story is that 
          it was concocted by a member of the Negroni 
          family asking the bartender to strengthen the Americano by adding gin, rather than the normal soda water.'
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
