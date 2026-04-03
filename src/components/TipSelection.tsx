import { useState } from 'react'

export default function TipSelection() {
  const tipPercentages = ['5%', '10%', '15%', '25%', '50%']
  const [selectedTip, setSelectedTip] = useState<string | null>(null)

  return (
    <div className="tip-selection">
      <label>Select Tip %</label>
      <div className="tip-buttons-container">
        {tipPercentages.map((tip) => (
          <button
            key={tip}
            type="button"
            className={`tip-btn ${selectedTip === tip ? 'active' : ''}`}
            onClick={() => setSelectedTip(tip)}
          >
            {tip}
          </button>
        ))}
        <input
          type="number"
          className="tip-custom"
          placeholder="Custom"
          min="0"
          onClick={() => setSelectedTip(null)}
        />
      </div>
    </div>
  )
}
