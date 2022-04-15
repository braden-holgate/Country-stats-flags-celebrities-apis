import React from 'react'
import { getCountries } from '../api/country'

const Data = () => {
  const [countryData, setCountry] = useState([])

  const loadData = () => {
    getCountries()
      .then(country => {
        setCountry(country)
      })
      .catch
  }

  return (
    <div>
      {countryD}
    </div>
  )
}

export default Data