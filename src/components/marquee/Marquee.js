function Marquee() {
  return (
    <div
      className="relative left-[20rem] right-[20rem] w-[calc(100vw-40rem)] h-[4.2rem]
        text-primary text-center italic
        [text-shadow:2px_2px_0px_#ffffff,_0_0_4px_#0f6513] whitespace-nowrap
        [line-height:4.2rem] text-4xl overflow-hidden translate-x-0"
    >
      這是一個跑馬燈
    </div>
  )
}
export default Marquee
