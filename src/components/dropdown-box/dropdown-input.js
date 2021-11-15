import React from 'react'
import fetchingData from '../../utils/fetching-data'

function DropDownInput({
  setIsOpen,
  setCustomers,
  setFilters,
  setSkipPg,
  setTakePg,
  skipPg,
  takePg
}) {
  return (
    <input
      type="text"
      className="w-64 rounded-l-lg"
      onChange={(e) => {
        if (e.target.value) {
          setIsOpen(true)
          fetchingData({
            skip: skipPg,
            take: takePg,
            filters: [
              {
                field: 'reference_name',
                operator: 'contains',
                value: e.target.value
              }
            ]
          })
            .then((data) => setCustomers(data.results))
            .catch((e) => console.log(e))
          setFilters([
            {
              field: 'reference_name',
              operator: 'contains',
              value: e.target.value
            }
          ])
          setSkipPg(0)
          setTakePg(10)
        } else {
          setFilters([])
        }
      }}
    />
  )
}

export default DropDownInput
