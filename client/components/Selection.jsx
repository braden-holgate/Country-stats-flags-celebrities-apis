import React, { useState, useEffect } from 'react'
import  Stats  from './Stats'
import  Flag  from './Flag'
import Select from 'react-select'
import countriesList from '../countries-list.json'
import { getCountries } from '../api/country'

const Selection = () => {
  const [countryCode, setCountryCode] = useState('')

// this is the api call function get one country
  const findCountry = async (code) => {
    const countriesData = await getCountries(code)
    console.log(countriesData)
  }
  
  return (
    <>
      <div className="App">
        <Select
          options={countriesList}
          // whatever code is entered, pass as parameter to api calls
          onChange={(opt) => findCountry(opt.value)}
        />
      </div>

      {/* <Flag />
      <Stats /> */}
    </>
  )}


export default Selection

