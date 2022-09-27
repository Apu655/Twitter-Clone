import React,{SVGProps} from 'react'

interface Props  {
    title:string, 
    Icon:(props: SVGProps<SVGSVGElement>)=>JSX.Element
}

function SidebarRow({title,Icon}: Props) {
  return (
    <div className='group flex max-w-fit space-x-2 cursor-pointer items-center rounded-full px-4 py-3 transition-all duration-300 hover:bg-gray-100'>
        {/* Icon */}
        <Icon className=' h-6 w-6'/> 
        <h4 className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>{title}</h4>

    </div>
  )
}

export default SidebarRow