import React, { useState } from 'react'

const Stats = (props) => {

  return (
    
    <div className='stats'>
      {props.countryData &&
      <>
      <p>Threatened Species: {props.countryData.threatened_species ? props.countryData.threatened_species : 'no data'}</p>
      <hr/>
      <p>Capital City: {props.countryData.capital ? props.countryData.capital : 'no data'}</p>
      <hr/>
      <p>Currency: {props.countryData.currency.name ? props.countryData.currency.name : 'no data'}</p>
      <hr/>
      <p>CO2 Emmisions: {props.countryData.co2_emissions ? `${props.countryData.co2_emissions} tonnes of carbon` : 'no data'}</p>
      <hr/>
      <p>Homicide Rate: {props.countryData.homicide_rate ? props.countryData.homicide_rate : 'no data'}</p>
      <hr/>
      <p>Male Life Expectancy : {props.countryData.life_expectancy_male ? `${props.countryData.life_expectancy_male} years` : 'no data'}</p>
      <hr/>
      <p>Female Life Expectancy: {props.countryData.life_expectancy_female? `${props.countryData.life_expectancy_female} years` : 'no data'}</p>
      <hr/>
      <p>GDP: {props.countryData.gdp ? `${props.countryData.gdp} USD` : 'no data'}</p>
      <hr/>
      <p>Population Density: {props.countryData.pop_density ? `${props.countryData.pop_density} people per km2` : 'no data'}</p>
      <hr/>
      <p>Surface Area: {props.countryData.surface_area? `${props.countryData.surface_area}m2` : 'no data'}</p>
      </>
}
    </div>
  )
    }


export default Stats