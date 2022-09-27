import React from 'react'
import {sidebarRowElements} from './sidebarElements'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
type Props = {}

function Sidebar({}: Props) {
  return ( 
    <div className='col-span-2 flex flex-col items-center md:items-start px-4'>
        <img className='m-3 h-10 w-10' src="https://links.papareact.com/drq"/>
        {sidebarRowElements.map((elements)=>(
            <SidebarRow key={elements.id} title={elements.title} Icon={elements.icon} />
        ))}
        
        
    </div>
  )
}

export default Sidebar