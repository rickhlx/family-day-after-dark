import * as React from "react"

export default function IndexPage() {
  return (
      <main class="bg-slate-900">
        <div class="flex flex-col md:max-w-sm mx-auto max-w-xs">
          <div class="flex flex-wrap h-screen content-center">
            <div class="text-xl font-serif text-white">Welcome to</div>
            <div class="text-8xl md:text-9xl font-parklane text-amber-500">Family Day After Dark</div>
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
