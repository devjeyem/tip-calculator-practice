import { useState } from 'react'
import './App.css'
import BillInput from './components/BillInput'
import TipSelection from './components/TipSelection'
import PeopleInput from './components/PeopleInput'
import ResultsDisplay from './components/ResultsDisplay'

function App() {
  // ---- Shared State ----
  const [bill, setBill] = useState<string>('')
  const [selectedTip, setSelectedTip] = useState<number | null>(null)
  const [customTip, setCustomTip] = useState<string>('')
  const [people, setPeople] = useState<string>('')

  // ---- Derived Values ----
  const billNum = parseFloat(bill) || 0
  const peopleNum = parseInt(people) || 0

  // Determine active tip percentage (custom overrides preset buttons)
  const tipPercent =
    customTip !== ''
      ? (parseInt(customTip) || 0) / 100
      : selectedTip !== null && selectedTip > 0
        ? selectedTip / 100
        : 0

  // ---- Calculations ----
  const tipPerPerson =
    billNum > 0 && peopleNum > 0
      ? (billNum * tipPercent) / peopleNum
      : 0

  const totalPerPerson =
    billNum > 0 && peopleNum > 0
      ? (billNum + billNum * tipPercent) / peopleNum
      : 0

  // Format to 2 decimal places with dollar sign
  const tipDisplay = `$${tipPerPerson.toFixed(2)}`
  const totalDisplay = `$${totalPerPerson.toFixed(2)}`

  // RESET is disabled when nothing has been changed
  const isResetDisabled =
    bill === '' && selectedTip === null && customTip === '' && people === ''

  // ---- Handlers ----
  const handleSelectTip = (tip: number) => {
    if (tip === -1) {
      // Custom input focused — clear preset selection
      setSelectedTip(null)
    } else {
      setSelectedTip(tip)
      setCustomTip('') // Clear custom when preset is chosen
    }
  }

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value)
    setSelectedTip(null) // Clear preset when custom is typed
  }

  const handleReset = () => {
    setBill('')
    setSelectedTip(null)
    setCustomTip('')
    setPeople('')
  }

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
          <BillInput value={bill} onChange={setBill} />
          <TipSelection
            selectedTip={selectedTip}
            customTip={customTip}
            onSelectTip={handleSelectTip}
            onCustomTipChange={handleCustomTipChange}
          />
          <PeopleInput value={people} onChange={setPeople} />
        </div>
        <ResultsDisplay
          tipAmount={tipDisplay}
          totalAmount={totalDisplay}
          isResetDisabled={isResetDisabled}
          onReset={handleReset}
        />
      </section>
    </main>
  )
}

export default App
