import React from 'react'

function DetailCustomer({client}) {
  return (
    <div className="w-auto h-auto bg-white shadow-md border-0 rounded-md my-1 p-3 hover:bg-green-200 cursor-pointer">
      <div className="flex justify-between flex-col">
        <div className="font-bold text-lg mb-2">{client.name}</div>
        <div className="text-md">
          <span className="text-gray-500">Email: </span>
          {client.business_email}
        </div>
        <div className="text-md">
          <span className="text-gray-500">Contact: </span>
          {client.contact_name}
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <span className="text-gray-500">City: </span>
            {client.city}
          </div>
          <div>
            <span className="text-gray-500">Country: </span>
            {client.country}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCustomer
