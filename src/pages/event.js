import * as React from "react"
import { Link } from "gatsby"

export default function IndexPage() {
  return (
      <main class="bg-slate-900">
          <div class="flex flex-wrap h-screen place-content-center">
            <div class="text-[10rem] md:text-[20rem] font-parklane text-amber-500">FD</div>
          </div>
        <div class="md:max-w-sm max-w-xs mx-auto">
      <div class="text-justify font-light font-serif text-gray-200">
        <p>
        <span class="text-amber-500">Welcome</span>, cats and kittens, we've been expecting you! You've received the secret invitation to our swanky speakeasy, and we're thrilled to have you.
        <br/>
        <br/>
        Now, listen up, if for some reason you can't make it, <span class="text-amber-500">let us know </span>before the gig kicks off.
        That will allow others the opportunity to enjoy the experience. Be sure to read the <span class="text-amber-500">House Rules</span> and get ready for a fun night!
        </p>
      </div>
        <div class="">
        <h1 class="pt-10 pb-10 font-parklane text-6xl text-amber-500 md:text-5xl">
            House Rules
        </h1>
        </div>
        <div class="text-justify font-light font-serif text-gray-200">
        <p><span class="text-amber-500">Enter quietly, leave silently.</span> We don’t want any attention drawn to our secret.
        If you let anyone in, you’re out. <span class="text-amber-500">Entry with ticket only.</span> No ticket, no drinks.
        <span class="text-amber-500"> Two drinks per guest.</span> Let's set the tone, please, speak <span class="italic">easy</span>. Enjoy one another's company. <span class="text-amber-500">No cell phone use inside. </span> 
        Dress snazzy. Proper attire required & semi-formal encouraged. Plenty of tables available. <span class="text-amber-500">No standing at the bar. </span>
        And finally, relax, sip a nice cocktail and have a swell time. 
        </p>  
        <div class="pt-5 text-center">This is <span class="text-amber-500 italic">Family Day After Dark.</span></div>
        </div>
        <h1 class="pt-10 pb-10 text-right font-parklane text-6xl text-amber-500 md:text-5xl">
            Cocktail Menu
        </h1>
        <div class="font-light font-serif text-gray-200 text-right pb-10">
        <p>
           Our cocktail menu can be found <Link className='text-amber-500' href="/cocktails">here</Link>.
        </p>  
        </div>
        <h1 class="pb-10 text-left font-parklane text-6xl text-amber-500 md:text-5xl">
            Location
        </h1>
        <div class="font-light font-serif text-gray-200 text-left pb-20">
        <p>
          We know you're excited, but check back on <span class="text-amber-500">Family Day</span> to find out the <span class="italic">secret</span> location.
        </p>  
        </div>
        </div>
      </main>
  )
}

export const Head = () => (
  <>
    <title>FDAD - Event</title>
    <meta
      name="og:title"
      content="Family Day After Dark"
    />
    <meta
      name="og:image"
      content="https://familydayafterdark.xyz/icon.png"
    />
  </>
)
