import React, { useState, useEffect } from 'react'
import  Stats  from './Stats'
import  Flag  from './Flag'
import { getCountries } from '../api/country'

const Dropdown = () => {
  const [country, setCountry] = useState({
    name: 'Afghanistan',
    code: 'AF',
    currency: 'AFN',
    population: 38930000
  })

  const [c, setC] = useState(null)

  // const findCountry = () => {
  //   getCountries()
  //     .then(str => {
  //       console.log(str)
  //     })
  // }

  const findCountry = async () => {
    const countriesData = await getCountries()
    console.log(countriesData)
  }
  
  
  return (
    <>
    {/* Create Dropdown menu, linking data from API */}
    <button onClick={() => findCountry()}>Find Country</button>
    
  
    <Flag />
    <Stats />
    </>
    
  )
}

export default Dropdown

// npm install -D @babel/plugin-transform-runtime@7

/*
      "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      [
        "@babel/plugin-transform-runtime",
        {
          "regenerator": true
        }
      ]
    ]
*/