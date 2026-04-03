import './ResultsDisplay.css'

type ResultsDisplayProps = {
  tipAmount?: string
  totalAmount?: string
  isResetDisabled?: boolean
  onReset?: () => void
}

function ResultsDisplay({
  tipAmount = '$0.00',
  totalAmount = '$0.00',
  isResetDisabled = true,
  onReset,
}: ResultsDisplayProps) {
  return (
    <aside className="results-display" aria-label="Results display">
      <div className="results-display__rows">
        <div className="results-display__row">
          <div className="results-display__label">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <strong>{tipAmount}</strong>
        </div>

        <div className="results-display__row">
          <div className="results-display__label">
            <p>Total</p>
            <span>/ person</span>
          </div>
          <strong>{totalAmount}</strong>
        </div>
      </div>

      <button
        type="button"
        className="results-display__reset"
        disabled={isResetDisabled}
        onClick={onReset}
      >
        RESET
      </button>
    </aside>
  )
}

export default ResultsDisplay