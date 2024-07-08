import '@/App.css'
// import MyButton from '@/components/cssFramework/ButtonCssModule'
// import MyButton from '@/components/cssFramework/ButtonStyledComponent'
// import MyButton from '@/components/cssFramework/ButtonCssProp'
// import MyButton from '@/components/cssFramework/ButtonTailwind'
// import BandCircle from '@/components/bandCircle/BandCircle'
import RamenPuzzle from '@/components/ramenPuzzle/RamenPuzzle'

function App() {
  return (
    <div className="h-screen bg-[url('/images/cat.jpg')] bg-contain bg-repeat bg-none">
      {/* CSS module */}
      {/* <MyButton
        variant="primary"
        size="big"
        status="disable"
        isHidden={true}
        color="yellow"
        className="button-special"
      /> */}
      {/* css-in-js */}
      {/* <MyButton
        variant="primary"
        size="big"
        isDisable={false}
        isHidden={true}
        color="yellow"
        className={{
          color: 'blue',
          backgroundColor: 'red',
          display: 'block'
        }}
      /> */}
      {/* Tailwind CSS */}
      {/* <MyButton
        variant="primary"
        size="big"
        isDisable={false}
        isHidden={true}
        className="text-blue-500 bg-red-500 block"
      /> */}
      {/* <BandCircle /> */}
      <RamenPuzzle />
    </div>
  )
}

export default App
