import { useEffect, useState, useRef } from 'react'

const RUN_ONCE_TIME = 4

function Marquee() {
  const marqueeEl = useRef(null)
  const [marqueeText, setMarqueeText] = useState('跑馬燈1跑馬燈2跑馬燈3跑馬燈4')
  const [marqueeLengthRatio, setMarqueeLengthRatio] = useState(100)
  const [marqueeTime, setMarqueeTime] = useState(0)

  function checkMarquee(el) {
    const clientWidth = el.clientWidth
    const scrollWidth = el.scrollWidth
    const ratio = Math.round((scrollWidth / clientWidth) * 100)
    setMarqueeLengthRatio(ratio)
    setMarqueeTime(Math.round((ratio + 100) * RUN_ONCE_TIME) / 100)
    console.log(clientWidth, scrollWidth)
  }

  useEffect(() => {
    checkMarquee(marqueeEl.current)
  }, [marqueeText])

  return (
    <>
      <div
        ref={marqueeEl}
        className="relative top-[10rem] left-[30rem] right-[30rem] w-[calc(100vw-60rem)] h-[4.2rem]
          text-primary text-center italic
          [text-shadow:2px_2px_0px_#ffffff,_0_0_4px_#0f6513] whitespace-nowrap
          [line-height:4.2rem] text-4xl overflow-hidden translate-x-0 border-gray-800
          bg-gray-200"
      >
        <p
          style={{
            '--startPosition': '100%',
            '--endPosition': `-${marqueeLengthRatio}%`,
            '--marqueeTime': `${marqueeTime}s`
          }}
          className="translate-x-[var(--startPosition)]"
        >
          {marqueeText}
        </p>
      </div>
      <div
        className="flex justify-between relative top-[10rem] left-[0rem] w-full h-[4.2rem]
          text-primary text-center whitespace-nowrap [line-height:4.2rem] text-xl
          overflow-hidden translate-x-0 border-gray-800 px-2"
      >
        <div>-???%</div>
        <div className="basis-[18%]">0%</div>
        <div className="basis-[18%]">100%</div>
        <div>???%</div>
      </div>
    </>
  )
}
export default Marquee
