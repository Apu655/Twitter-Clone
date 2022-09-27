import React from 'react'
import {SearchIcon} from "@heroicons/react/outline"


type Props = {}

function Widgets({}: Props) {
  return (
    <div className='col-span-2 mt-2 hidden md:inline-block px-2'>
        <div className='flex space-x-2 bg-gray-100 items-center p-2 rounded-full mt-2 '>
            <SearchIcon className='h-5 w-5 text-gray-400'/>
            <input className='bg-transparent' type="text" placeholder='Search Twitter'/>
        </div>
        Widgets LIST
    </div>
  )
}

export default Widgets