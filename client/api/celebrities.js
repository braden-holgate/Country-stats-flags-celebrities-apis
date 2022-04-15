import request from 'superagent'

export const getCelebrity = async (code) => {
  try {
    const response = await request
      .get(`https://api.api-ninjas.com/v1/celebrity?nationality=${code}`)
      .set('X-Api-Key', 'DihX1jV3mdgYXXCyiKMB/g==VRyOrLI5BH3qtq2H')
    return response.body
  } catch (e) {
    console.log(e.message)
  }
}
