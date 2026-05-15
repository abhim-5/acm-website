import { useEffect, useRef } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Events from '@/components/sections/Events'
import Team from '@/components/sections/Team'
import Community from '@/components/sections/Community'
import SiteFooter from '@/components/sections/SiteFooter'
import Splash from '@/components/design/Splash'
import EventTicker from '@/components/design/EventTicker'
import Cursor from '@/components/design/Cursor'
import Navbar from '@/components/common/Nav'
import { lenis } from './main'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function App() {
  const { width, height } = useWindowSize()
  const noiseRef = useRef<SVGRectElement>(null)
  const noise2Ref = useRef<SVGRectElement>(null)

  const lockScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }

  useEffect(() => {
    if (noiseRef.current) {
      noiseRef.current.style.height = `${height * 2}px`
      noiseRef.current.style.width = `${width}px`
    }
    if (noise2Ref.current) {
      noise2Ref.current.style.height = `${height * 2}px`
      noise2Ref.current.style.width = `${width}px`
    }
  }, [width, height])

  useEffect(() => {
    document.body.classList.add('stop-scrolling')
    const timer = setTimeout(() => {
      document.body.classList.remove('stop-scrolling')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Splash />

      <div className="pointer-events-none fixed inset-0 z-50">
        <svg
          className="h-[150vh] w-full object-cover object-center"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves={1}
              stitchTiles="stitch"
            />
            <feBlend mode="screen" />
          </filter>
          <rect ref={noiseRef} className="size-full" filter="url(#noise)" opacity="0.15" />

          <filter id="noise2">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={1}
              stitchTiles="stitch"
            />
            <feBlend mode="screen" />
          </filter>
          <rect
            ref={noise2Ref}
            className="size-full"
            filter="url(#noise2)"
            opacity="-0.88"
          />
        </svg>
      </div>

      <Cursor />
      <Navbar onLocked={lockScroll} />

      <main className="relative min-h-full">
        <Hero />
        <div className="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]">
          <About />
          <EventTicker />
          <Events />
        </div>

        <Team />
        <Community />
        <SiteFooter />
      </main>
    </>
  )
}
