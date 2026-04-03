import iconPerson from '../../images/icon-person.svg'
import './PeopleInput.css'

type PeopleInputProps = {
  value: string
  onChange: (value: string) => void
}

function PeopleInput({ value, onChange }: PeopleInputProps) {
  const hasError = value === '0'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    // Allow empty string or whole positive numbers only
    if (val === '' || /^\d+$/.test(val)) {
      onChange(val)
    }
  }

  return (
    <div className="people-input">
      <div className="people-input__header">
        <label htmlFor="people-field" className="people-input__label">
          Number of People
        </label>
        {hasError && (
          <span className="people-input__error" role="alert">
            Can't be zero
          </span>
        )}
      </div>
      <div className={`people-input__field${hasError ? ' people-input__field--error' : ''}`}>
        <img
          src={iconPerson}
          alt=""
          className="people-input__icon"
          aria-hidden="true"
        />
        <input
          id="people-field"
          type="number"
          placeholder="0"
          value={value}
          onChange={handleChange}
          min="0"
          step="1"
          aria-invalid={hasError}
        />
      </div>
    </div>
  )
}

export default PeopleInput
