import React from 'react'

function DetailCustomer({
  client,
  isEmail,
  isContact,
  isCity,
  isCountry,
  setOpen,
  setObj,
  index
}) {
  return (
    <div
      className={`${
        index === 0 ? 'sticky top-0' : ''
      } w-auto h-auto bg-white shadow-md border-0 rounded-md my-1 px-3 py-1 hover:bg-gray-50 hover:text-gray-700 cursor-pointer`}
      onClick={() => {
        setOpen(true)
        setObj(client)
      }}
    >
      <div className="flex justify-between flex-col">
        <div className="font-bold text-lg">{client.name}</div>
        <div className={`text-md ${isEmail ? '' : 'invisible'}`}>
          <span className="text-gray-500">Email: </span>
          {client.business_email}
        </div>
        <div className={`text-md ${isContact ? '' : 'invisible'}`}>
          <span className="text-gray-500">Contact: </span>
          {client.contact_name}
        </div>
        <div className="flex justify-between">
          <div className={`text-md ${isCity ? '' : 'invisible'}`}>
            <span className="text-gray-500">City: </span>
            {client.city}
          </div>
          <div className={`text-md ${isCountry ? '' : 'invisible'}`}>
            <span className="text-gray-500">Country: </span>
            {client.country}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCustomer
