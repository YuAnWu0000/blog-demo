function Marquee() {
  return (
    <div
      className="relative top-[10rem] left-[30rem] right-[30rem] w-[calc(100vw-60rem)] h-[4.2rem]
        text-primary text-center italic
        [text-shadow:2px_2px_0px_#ffffff,_0_0_4px_#0f6513] whitespace-nowrap
        [line-height:4.2rem] text-4xl overflow-hidden translate-x-0 border-gray-800
        bg-gray-200"
    >
      <p className="w-full animate-runMarquee">
        跑馬燈1跑馬燈2跑馬燈3跑馬燈4跑馬燈5跑馬燈6跑馬燈7跑馬燈8跑馬燈9跑馬燈10
      </p>
    </div>
  )
}
export default Marquee
