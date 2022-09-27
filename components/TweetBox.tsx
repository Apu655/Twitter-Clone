import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React,{useState} from 'react'

type Props = {}

function TweetBox({}: Props) {
    const [input, setInput] = useState<string>("")
  return (
    <div className='flex p-5 space-x-2'>
        <img className='mt-4 h-14 w-14 rounded-full object-cover'
            src="https://links.papareact.com/gll"
        />
        <div className='flex items-center flex-1 pl-2'>
            <form className='flex flex-1 flex-col'>
                <input className='h-24 outline-none rounded-full p-2' placeholder="What's Happening?" value={input} onChange={e=>setInput(e.target.value)}/>
                
                <div className='flex items-center justify-between'>
                    <div className='flex space-x-1 text-twitter items-center'>
                        <PhotographIcon className='h-5 w-5 hover:scale-150 transition-all ease-out cursor-pointer duration-200'/>
                        <SearchCircleIcon className='h-5 w-5 hover:scale-150 transition-all ease-out cursor-pointer duration-200'/>
                        <EmojiHappyIcon className='h-5 w-5 hover:scale-150 transition-all ease-out cursor-pointer duration-200'/>
                        <CalendarIcon className='h-5 w-5 hover:scale-150 transition-all ease-out cursor-pointer duration-200'/>
                        <LocationMarkerIcon className='h-5 w-5 hover:scale-150 transition-all ease-out cursor-pointer duration-200'/>
                        
                    </div>
                    <button disabled={!input} className='disabled:opacity-50 rounded-full bg-twitter px-5 py-2 font-bold text-white'>Tweet</button>
                </div>
            </form>

        </div>

    </div>
  )
}

export default TweetBox