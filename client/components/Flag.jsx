import React from 'react'


const Flag = ({code}) => {

  const rootUrl = 'https://countryflagsapi.com/png/'

  return (
  <div>
    <img src={rootUrl + code}></img>
  </div>
  )
}

export default Flag