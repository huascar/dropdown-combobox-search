import React, {useEffect} from 'react'

async function fetchData() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_HEROKU_CORS_ANYWHERE}${process.env.REACT_APP_ENDPOINT}?simple=true`,
      {
        // mode: 'no-cors',
        // credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          APIKEY: process.env.REACT_APP_APIKEY,
          'Data-Operations': JSON.stringify({
            filter: {
              logic: 'and',
              filters: [
                {field: 'reference_name', operator: 'contains', value: 'super'}
              ]
            },
            skip: 0,
            take: 10,
            group: [],
            all: false
          })
        }
      }
    )

    const data = await response.json()

    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

function DropdownBox() {
  // const [filters, setFilters] = useState('')
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      Dropdown {process.env.REACT_APP_APIKEY} {process.env.REACT_APP_ENDPOINT}
    </div>
  )
}

export default DropdownBox
