import iconDollar from '../../images/icon-dollar.svg'
import './BillInput.css'

type BillInputProps = {
  value: string
  onChange: (value: string) => void
}

function BillInput({ value, onChange }: BillInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    // Allow empty string or valid positive numbers (including decimals)
    if (val === '' || /^\d*\.?\d{0,2}$/.test(val)) {
      onChange(val)
    }
  }

  return (
    <div className="bill-input">
      <label htmlFor="bill-field" className="bill-input__label">
        Bill
      </label>
      <div className="bill-input__field">
        <img
          src={iconDollar}
          alt=""
          className="bill-input__icon"
          aria-hidden="true"
        />
        <input
          id="bill-field"
          type="number"
          placeholder="0"
          value={value}
          onChange={handleChange}
          min="0"
          step="0.01"
        />
      </div>
    </div>
  )
}

export default BillInput
