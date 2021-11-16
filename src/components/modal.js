import React from 'react'
import {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {ClipboardCheckIcon} from '@heroicons/react/outline'

function CustomerModal({open, setOpen, obj}) {
  const cancelButtonRef = useRef(null)
  return (
    <div>
      {obj && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ClipboardCheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 text-gray-900 text-center uppercase font-bold"
                        >
                          New Customer
                        </Dialog.Title>
                        <div className="mt-2">
                          <label className="text-left font-bold">Name</label>
                          <input
                            type="text"
                            className="rounded-lg w-full my-2"
                            placeholder="Name"
                            value={obj.name}
                            disabled={true}
                          />
                          <label className="text-left font-bold">Contact</label>
                          <input
                            type="text"
                            className="rounded-lg w-full my-2"
                            placeholder="Contact"
                            value={obj.contact_name}
                            disabled={true}
                          />
                          <label className="text-left font-bold">Email</label>
                          <input
                            type="text"
                            className="rounded-lg w-full my-2"
                            placeholder="Email"
                            value={obj.business_email}
                            disabled={true}
                          />
                          <label className="text-left font-bold">City</label>
                          <input
                            type="text"
                            className="rounded-lg w-full my-2"
                            placeholder="City"
                            value={obj.city}
                            disabled={true}
                          />
                          <label className="text-left font-bold">Country</label>
                          <input
                            type="text"
                            className="rounded-lg w-full my-2"
                            placeholder="Country"
                            value={obj.country}
                            disabled={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      disabled={true}
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  )
}

export default CustomerModal
