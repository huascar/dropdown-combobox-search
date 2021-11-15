import React from 'react'
import DropdownBox from './components/dropdown-box'
import HeaderMenu from './components/header-menu'

function App() {
  return (
    <div className="flex flex-col justify-center">
      <HeaderMenu />
      <div className="bg-gray-100 mx-auto max-w-xl">
        <div className="p-4">
          <DropdownBox />
        </div>
      </div>
    </div>
  )
}

export default App
