/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import fetchingData from '../../utils/fetching-data'
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
      <div className="flex mb-3 justify-center">
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
      <div>
        {isOpen && (
          <div className="flex justify-between">
            <div></div>
            <div>
              <button
                className="m-1 bg-blue-500 py-1 px-3 text-white rounded-md"
                onClick={() => {
                  setIsOpen(false)
                  setCustomers([])
                  setFilters([])
                  setFilterName('')
                }}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                  <div> Clean</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {isOpen && (
          <div className="bg-gray-200 rounded-md w-auto mb-3 cursor-pointer">
            <div className="flex justify-center">
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
              </div>
              <div className="pr-2 py-2 text-md">Attributes</div>
            </div>
            <div className="flex p-2">
              <div className="m-1">
                <label>
                  <input
                    type="checkbox"
                    className="rounded-sm"
                    onChange={(e) => setIsEmail(e.target.checked)}
                    checked={isEmail}
                  />{' '}
                  Email
                </label>
              </div>
              <div className="m-1">
                <label>
                  <input
                    type="checkbox"
                    className="rounded-sm"
                    onChange={(e) => setIsContact(e.target.checked)}
                    checked={isContact}
                  />{' '}
                  Contact
                </label>
              </div>
              <div className="m-1">
                <label>
                  <input
                    type="checkbox"
                    className="rounded-sm"
                    onChange={(e) => setIsCity(e.target.checked)}
                    checked={isCity}
                  />{' '}
                  City
                </label>
              </div>
              <div className="m-1">
                <label>
                  <input
                    type="checkbox"
                    className="rounded-sm"
                    onChange={(e) => setIsCountry(e.target.checked)}
                    checked={isCountry}
                  />{' '}
                  Country
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {isOpen &&
        customers &&
        customers.length > 0 &&
        customers.map((client) => (
          <DetailCustomer
            key={client.id}
            client={client}
            isEmail={isEmail}
            isContact={isContact}
            isCity={isCity}
            isCountry={isCountry}
          />
        ))}
    </div>
  )
}

export default DropdownBox
