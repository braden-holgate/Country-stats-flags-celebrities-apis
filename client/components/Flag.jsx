import React from 'react'


const Flag = (props) => {
  let code = props.props
  const rootUrl = 'https://countryflagsapi.com/png/'
  return (
  <div>
    {code && <img src={rootUrl + code}></img>}
  </div>
  )
}

export default Flag