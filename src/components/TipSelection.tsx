type TipSelectionProps = {
  selectedTip: number | null
  customTip: string
  onSelectTip: (tip: number) => void
  onCustomTipChange: (value: string) => void
}

export default function TipSelection({
  selectedTip,
  customTip,
  onSelectTip,
  onCustomTipChange,
}: TipSelectionProps) {
  const tipPercentages = [5, 10, 15, 25, 50]

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d*$/.test(value)) {
      onCustomTipChange(value)
    }
  }

  return (
    <div className="tip-selection">
      <label>Select Tip %</label>
      <div className="tip-buttons-container">
        {tipPercentages.map((tip) => (
          <button
            key={tip}
            type="button"
            className={`tip-btn ${selectedTip === tip && customTip === '' ? 'active' : ''}`}
            onClick={() => onSelectTip(tip)}
          >
            {tip}%
          </button>
        ))}
        <input
          type="number"
          className="tip-custom"
          placeholder="Custom"
          min="0"
          value={customTip}
          onChange={handleCustomChange}
          onFocus={() => onSelectTip(-1)}
        />
      </div>
    </div>
  )
}
