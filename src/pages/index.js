import * as React from "react"

export default function IndexPage() {
  return (
      <main class="bg-slate-900">
        <div class="flex flex-col md:max-w-sm mx-auto max-w-xs">
          <div class="flex flex-wrap h-screen content-center">
            <div class="text-xl font-serif text-gray-200 ">Welcome to</div>
            <div class="text-8xl md:text-9xl font-parklane text-amber-500">Family Day After Dark</div>
          </div>
          <div class="flex flex-wrap h-screen content-center text-gray-200 font-serif font-light">
            <p>Welcome to Family Day After Dark, a speakeasy-themed event that will transport you back to the prohibition era. Get ready for a night of cocktails, live music, and entertainment in a secret location that only few will know.</p>
            <br/>
            <p>Step into our hidden venue and immerse yourself in the ambiance of the roaring twenties. Sip on classic cocktails, tap your toes to jazz and swing, and mingle with other guests. Remember, this is a secret event, so keep your ears open for the latest rumors to find out how to join the party.</p>
            <br/>
            <p>Please note that this is an invite-only event, and each guest will need a ticket to gain entry. 
              We have limited capacity, so make sure to secure your ticket early. Your ticket will also include two drink tokens, 
              allowing you to order up to two cocktails during the event.</p>
              <br/>
            <p>Get ready for an unforgettable night of 1920s-style excitement at Family Day After Dark.</p>
          </div>
        </div>
      </main>
  )
}

export const Head = () => (
  <>
    <title>FD</title>
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
