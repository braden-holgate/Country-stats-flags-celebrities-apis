import request from 'superagent'

export const getHoliday = async (code) => {
  try {
    const response = await request
      .get(`https://api.api-ninjas.com/v1/holidays?country=${code}`)
      .set('X-Api-Key', 'DihX1jV3mdgYXXCyiKMB/g==VRyOrLI5BH3qtq2H')
    return response.body
  } catch (e) {
    console.log(e.message)
  }
}
