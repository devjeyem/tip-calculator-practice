import { useState } from 'react'
import iconPerson from '../../images/icon-person.svg'
import './PeopleInput.css'

function PeopleInput() {
  const [people, setPeople] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Allow empty string or whole positive numbers only
    if (value === '' || /^\d+$/.test(value)) {
      setPeople(value)

      // Show error only when value is explicitly "0"
      if (value === '0') {
        setHasError(true)
      } else {
        setHasError(false)
      }
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
          value={people}
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
