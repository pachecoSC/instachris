import { useState } from 'react'

export const useinputValue = (initialValue) => {
  const [value, SetValue] = useState(initialValue)
  const onChange = (e) => SetValue(e.target.value)

  return { value, onChange }
}
