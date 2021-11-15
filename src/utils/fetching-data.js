const ENDPOINT_URL = `${process.env.REACT_APP_HEROKU_CORS_ANYWHERE}${process.env.REACT_APP_ENDPOINT}`

let headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

async function fetchingData({skip, take, filters}) {
  headers.APIKEY = process.env.REACT_APP_APIKEY
  headers['Data-Operations'] = JSON.stringify({
    filter: {
      logic: 'and',
      filters
    },
    skip,
    take,
    group: [],
    all: false
  })
  try {
    const response = await fetch(ENDPOINT_URL, {headers})

    const data = await response.json()

    return data
  } catch (e) {
    console.log(e)
    return e
  }
}

export default fetchingData
