import React from 'react'


const Flag = () => {
  const code = 'NZ' 
  const rootUrl = 'https://countryflagsapi.com/png/'

  return (
  <div>
    <img src={rootUrl + code}></img>
  </div>
  )
}

export default Flag