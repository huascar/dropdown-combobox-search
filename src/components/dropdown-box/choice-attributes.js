import React from 'react'

function ChoiceAttributes({
  setIsEmail,
  isEmail,
  setIsContact,
  isContact,
  setIsCity,
  isCity,
  setIsCountry,
  isCountry
}) {
  return (
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
  )
}

export default ChoiceAttributes
