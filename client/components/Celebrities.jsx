import React, { useState, useEffect } from 'react'
import { getCelebrity } from '../api/celebrities'

const Celebrities = (props) => {
  let code = props.code
  const [celeb, setCeleb] = useState(null)

  useEffect(() => {
    findCeleb()
  }, [code])

  const findCeleb = () => {
    getCelebrity(code)
      .then(arr => {
        setCeleb(arr)
      })
      .catch
  }

  return (
    <div>
    {celeb && <h3> Celebs from {code}</h3>}
    {celeb?.map((c,i) => <div key={i}>{c.name}</div>)}
    </div>
  )
}

export default Celebrities