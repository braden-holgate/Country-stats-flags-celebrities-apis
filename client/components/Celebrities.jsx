import React, { useState } from 'react'
import { getCelebrity } from '../api/celebrities'

const Celebrities = (props) => {
  console.log(props)
  let code = props.code
  const [celeb, setCeleb] = useState(null)

  const findCeleb = () => {
    getCelebrity(code)
      .then(arr => {
        console.log(arr)
        setCeleb(arr)
      })
      .catch
  }

  return (
    <>
    <button onClick={findCeleb}>Celebs Reveal</button>
    <h3> Celebs from {code}</h3>
    {celeb?.map((c,i) => <div key={i}>{c.name}</div>)}
    </>
  )
}

export default Celebrities