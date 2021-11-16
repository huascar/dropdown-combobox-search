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
    <div className="bg-blue-100 rounded-md w-auto mt-2 py-1 cursor-pointer">
      <div className="flex p-2">
        <div className="m-1">
          <label className="text-sm">
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
          <label className="text-sm">
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
          <label className="text-sm">
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
          <label className="text-sm">
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
