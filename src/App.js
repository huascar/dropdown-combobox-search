import React from 'react'
import DropdownBox from './components/dropdown-box'
import HeaderMenu from './components/header-menu'

function App() {
  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <HeaderMenu />
      <div className="mx-auto h-screen">
        <div className="p-4">
          <DropdownBox />
        </div>
      </div>
    </div>
  )
}

export default App
