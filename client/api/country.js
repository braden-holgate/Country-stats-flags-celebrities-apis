import request from 'superagent'

// const countriesUrl = 'https://api.api-ninjas.com/v1/country?name=Australia'

export const getCountries = async () => {
  // return request
  //   .get('https://pokeapi.co/api/v2/pokemon/ditto')
  //   .then((res) => res)

  try {
    const response = await request
      .get('https://api.api-ninjas.com/v1/country?name=Australia')
      .set('X-Api-Key', 'DihX1jV3mdgYXXCyiKMB/g==VRyOrLI5BH3qtq2H')
    // console.log(response)
    return response.body
  } catch (e) {
    console.log(e.message)
  }
}
