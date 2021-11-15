import React, {useState} from 'react'
import fetchingData from '../../utils/fetching-data'
import DetailCustomer from './detail-customer'
import DropdownButton from './dropdown-button'

function DropdownBox() {
  const [customers, setCustomers] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState([])
  const [skipPg, setSkipPg] = useState(0)
  const [takePg, setTakePg] = useState(10)
  // eslint-disable-next-line no-unused-vars
  const [queryParams, setQueryParams] = useState()

  function customerList() {
    if (!isOpen) {
      setIsOpen(true)
      fetchingData({skip: skipPg, take: takePg, filters})
        .then((data) => setCustomers(data.results))
        .catch((e) => console.log(e))
    } else {
      setIsOpen(false)
      setCustomers([])
    }
  }

  return (
    <div>
      <div className="font-bold text-xl p-1 text-center">Dropdown ComboBox</div>
      <div className="flex mb-5 justify-center">
        <div>
          <input
            type="text"
            className="w-64 rounded-l-lg"
            onChange={(e) => {
              // console.log(e.target.value)
              e.preventDefault()
              if (e.target.value) {
                setFilters((prevState) => [
                  ...prevState,
                  {
                    field: 'reference_name',
                    operator: 'contains',
                    value: e.target.value
                  }
                ])
                setIsOpen(true)
                fetchingData({skip: skipPg, take: takePg, filters})
                  .then((data) => setCustomers(data.results))
                  .catch((e) => console.log(e))
                setSkipPg(0)
                setTakePg(10)
              }
            }}
          />
        </div>
        <div>
          <DropdownButton isOpen={isOpen} customerList={customerList} />
        </div>
      </div>
      {isOpen &&
        customers &&
        customers.length > 0 &&
        customers.map((client) => (
          <DetailCustomer key={client.id} client={client} />
        ))}
    </div>
  )
}

export default DropdownBox
