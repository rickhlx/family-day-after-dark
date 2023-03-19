import * as React from "react"
import { useState, useEffect } from 'react';

export default function IndexPage() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "April, 29, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };

      useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 100);
    
        return () => clearInterval(interval);
      }, []);
    

  return (
      <main class="bg-slate-900">
        <div class="text-gray-200 font-serif font-light md:max-w-sm max-w-xs mx-auto">
        <div class="pt-20 pb-10">
        <h1 class="text-center font-parklane text-3xl text-amber-500 md:text-5xl">
            Time &<br/>Location
        </h1>
        </div>
        <p class="text-sm text-center md:text-lg">Check back in:</p>
        <div class="flex flex-wrap flex-row place-content-center text-lg text-center">
            <div class="p-1"><span class="text-amber-500 text-2xl">{days} </span><br/>days</div>
            <div class="p-1"><span class="text-amber-500 text-2xl">{hours} </span><br/>hours</div>
        </div>
        <div class="pt-10">
        <h1 class="text-center font-parklane text-3xl text-amber-500 md:text-5xl">
            House<br/>Rules
        </h1>
        </div>
        <div class="p-9 text-justify tracking-tight md:text-lg">
        <p><span class="text-amber-500">Enter quietly, leave silently.</span> We don’t want any attention drawn to our secret.
        If you let anyone in, you’re out. <span class="text-amber-500">Entry with ticket only.</span> No ticket, no drinks.
        <span class="text-amber-500"> Two drinks per guest.</span> Let's set the tone, please, speak <span class="italic">easy</span>. Enjoy one another's company, <span class="text-amber-500">no cell phone use inside. </span> 
        Proper attire required, semi-formal encouraged. Plenty of tables available, <span class="text-amber-500">no standing at the bar. </span>
        And finally, please do not bring anyone to Family Day After Dark that you wouldn't bring along for a <span class="text-amber-500">weekend getaway.</span>
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
