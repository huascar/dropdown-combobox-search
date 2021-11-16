import React from 'react'

function CleanBtn({setCustomers, setFilterName, setIsOpen, setFilters}) {
  return (
    <div className="flex justify-between pt-1">
      <div></div>
      <div>
        <button
          className="my-1 bg-red-400 py-1 px-3 text-white rounded-md"
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
  )
}

export default CleanBtn
