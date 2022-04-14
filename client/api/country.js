import request from 'superagent'

const countriesUrl = 'https://api.api-ninjas.com/v1/'

export function getCountries() {
  return request
    .get(countriesUrl)
    .then((response) => console.log(response.body))
}
