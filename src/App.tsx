import './App.css'
import BillInput from './components/BillInput'
import TipSelection from './components/TipSelection'
import PeopleInput from './components/PeopleInput'

function App() {
  return (
    <main className="app">
      <header className="logo" aria-label="Site logo">
        <h1>
          SPLI
          <br />
          TTER
        </h1>
      </header>

      <section className="calculator-card" aria-label="Tip calculator">
        <div className="calculator-left">
          <BillInput />
          <TipSelection />
          <PeopleInput />
        </div>

        <div className="calculator-right">
          <div className="placeholder">Right results side</div>
        </div>
      </section>
    </main>
  )
}

export default App
