import * as React from "react"

export default function IndexPage() {
  return (
      <main class="bg-slate-900">
        <div class="flex flex-col md:max-w-sm mx-auto max-w-xs">
          <div class="flex flex-wrap h-screen content-center">
            <div class="text-xl font-serif text-gray-200 ">Welcome to</div>
            <div class="text-8xl md:text-9xl font-parklane text-amber-500">Family Day After Dark</div>
          </div>
          <div class="flex flex-wrap h-screen content-center text-gray-200 font-serif font-light text-justify">
            <p>Welcome to <span class="text-amber-500">Family Day After Dark</span>, the speakeasy that will transport you back to the prohibition era. 
              Get ready for a night of cocktails, live music, 
              and entertainment at a secret location only a few will know.</p>
            <br/>
            <p>Step into our hidden venue and immerse yourself in the ambiance of the roaring twenties. 
              Sip on classic cocktails, tap your toes to jazz and swing, and mingle with other guests. 
              Remember, this is a secret event, so keep your ears open to find out how to join the party.</p>
            <br/>
            <p>Please note that this is an <span class="text-amber-500">invite-only</span> event, each guest will need a ticket to gain entry. 
              We have limited capacity, so make sure to secure your tickets early. Your ticket will also include drink tokens, 
              allowing you to order cocktails during the event.</p>
              <br/>
            <p>If you would like to attend, secure your tickets by texting <span class="font-bold" >'FDAD'</span> to <a class="text-amber-500" href="sms:+18453502057">(845)-350-2057</a>.</p>
            <br/>
            <p class="text-xs">This is a personal invitation, do not share this with anyone except other ticketed guests.</p>
          </div>
        </div>
      </main>
  )
}

export const Head = () => (
  <>
    <title>FDAD</title>
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
