import React, { useState, useEffect } from 'react'
import  Stats  from './Stats'
import  Flag  from './Flag'
import Select from 'react-select'
import countriesList from '../countries-list.json'
import { getCountries } from '../api/country'
import Celebrities from './Celebrities'

const Selection = () => {
  const [code, setCountryCode] = useState('')
  const [countryData, setCountryData] = useState(null)
// this is the api call function get one country

  const changeHandler = async (code) => {
    setCountryCode(code)
    findCountry(code)
  }

  const findCountry = async (code) => {
    const countryData = await getCountries(code)
    console.log(countryData[0])
    setCountryData(countryData[0])
  }

  return (
    <>
      <div className="App">
        <Select
          options={countriesList}
          // whatever code is entered, pass as parameter to api calls
          onChange={(opt) => changeHandler(opt.value)}
        />
        {/* <Country /> */}
        <br></br>
        <div className='row-container'>
        <Flag props={code}/>
        <br></br>
        <Stats countryData={countryData} />
        <br></br>
        <Celebrities code={code} />
        </div>
      </div>

    </>
  )}


export default Selection

