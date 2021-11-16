import React from 'react'
import fetchingData from '../../utils/fetching-data'

function DropDownInput({
  setIsOpen,
  setCustomers,
  setFilters,
  setSkipPg,
  setTakePg,
  skipPg,
  takePg,
  filterName,
  setFilterName,
  setIsLoadingData
}) {
  return (
    <input
      type="text"
      className="w-64 rounded-l-lg focus:ring-0"
      value={filterName}
      placeholder="Find your customer"
      onChange={(e) => {
        setFilterName(e.target.value)
        if (e.target.value) {
          setIsOpen(true)
          setIsLoadingData(true)
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
            .then((data) => {
              setIsLoadingData(false)
              setCustomers(data.results)
            })
            .catch((e) => console.log(e))
          setFilters([
            {
              field: 'reference_name',
              operator: 'contains',
              value: e.target.value
            }
          ])
          setSkipPg(0)
          setTakePg(20)
        } else {
          console.log('no text', filterName)
          setFilters([])
          setCustomers([])
          setFilterName(e.target.value)
          setIsOpen(false)
        }
      }}
    />
  )
}

export default DropDownInput
