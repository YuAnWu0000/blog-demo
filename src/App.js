import './App.css'
// import MyButton from './components/ButtonCssModule'
// import MyButton from './components/ButtonStyledComponent'
import MyButton from './components/ButtonCssProp'
// import MyButton from './components/ButtonTailwind'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <MyButton
        variant="primary"
        size="big"
        status="disable"
        isHidden={true}
        color="yellow"
        className="button-special"
      /> */}
      <MyButton
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
      />
      {/* <MyButton
        variant="primary"
        size="big"
        isDisable={false}
        isHidden={true}
        className="text-blue-500 bg-red-500 block"
      /> */}
    </div>
  )
}

export default App
