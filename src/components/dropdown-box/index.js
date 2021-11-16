import React, {useState} from 'react'
import fetchingData from '../../utils/fetching-data'
import CustomerModal from '../modal'
import ChoiceAttributes from './choice-attributes'
import DetailCustomer from './detail-customer'
import DropdownButton from './dropdown-button'
import DropDownInput from './dropdown-input'
function DropdownBox() {
  const [customers, setCustomers] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState([])
  const [skipPg, setSkipPg] = useState(0)
  const [takePg, setTakePg] = useState(20)
  const [isEmail, setIsEmail] = useState(true)
  const [isContact, setIsContact] = useState(true)
  const [isCity, setIsCity] = useState(true)
  const [isCountry, setIsCountry] = useState(true)
  const [filterName, setFilterName] = useState('')
  const [open, setOpen] = useState(false)
  const [obj, setObj] = useState()
  const [isLoadingData, setIsLoadingData] = useState(false)
  function customerList() {
    if (!isOpen) {
      setIsOpen(true)
      setIsLoadingData(true)
      fetchingData({skip: skipPg, take: takePg, filters})
        .then((data) => {
          setCustomers(data.results)
          setIsLoadingData(false)
        })
        .catch((e) => console.log(e))
    } else {
      setIsOpen(false)
      setCustomers([])
    }
  }

  return (
    <div>
      <div className="font-bold text-xl p-1 text-center mb-3">
        Dropdown ComboBox
      </div>

      <CustomerModal open={open} setOpen={setOpen} obj={obj} />
      <div className="flex mb-1 justify-center">
        <div>
          <DropDownInput
            setIsOpen={setIsOpen}
            setCustomers={setCustomers}
            setFilters={setFilters}
            setSkipPg={setSkipPg}
            setTakePg={setTakePg}
            skipPg={skipPg}
            takePg={takePg}
            filterName={filterName}
            setFilterName={setFilterName}
            setIsLoadingData={setIsLoadingData}
          />
        </div>
        <div>
          <DropdownButton
            isOpen={isOpen}
            customerList={customerList}
            setCustomers={setCustomers}
            setFilters={setFilters}
            setFilterName={setFilterName}
          />
        </div>
      </div>
      {isOpen && customers && customers.length > 0 && (
        <ChoiceAttributes
          setIsEmail={setIsEmail}
          isEmail={isEmail}
          setIsContact={setIsContact}
          isContact={isContact}
          setIsCity={setIsCity}
          isCity={isCity}
          setIsCountry={setIsCountry}
          isCountry={isCountry}
        />
      )}
      {/* {isOpen && customers && customers.length > 0 && (
        <CleanBtn
          setCustomers={setCustomers}
          setFilterName={setFilterName}
          setIsOpen={setIsOpen}
          setFilters={setFilters}
        />
      )} */}

      {isOpen ? (
        customers && customers.length > 0 ? (
          <div className="overflow-auto h-96">
            {customers.map((client, index) => (
              <DetailCustomer
                key={client.id}
                client={client}
                isEmail={isEmail}
                isContact={isContact}
                isCity={isCity}
                isCountry={isCountry}
                setOpen={setOpen}
                setObj={setObj}
                index={index}
              />
            ))}
          </div>
        ) : isLoadingData ? (
          <div className="mt-2 p-2 bg-white shadow-md rounded-md text-gray-500 text-center">
            Loading...
          </div>
        ) : (
          <div className="mt-2 p-2 bg-white shadow-md rounded-md text-gray-500 text-center">
            No results
          </div>
        )
      ) : (
        ''
      )}
    </div>
  )
}

export default DropdownBox
