import React from 'react'

function DropdownButton({
  isOpen,
  customerList,
  setCustomers,
  setFilters,
  setFilterName
}) {
  return (
    <button
      className={`p-2 ${
        isOpen ? 'bg-green-400' : 'bg-gray-400'
      } text-white rounded-r-lg shadow-md`}
      onClick={() => {
        customerList()
        setCustomers([])
        setFilters([])
        setFilterName('')
      }}
    >
      {!isOpen ? (
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      ) : (
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      )}
    </button>
  )
}

export default DropdownButton
