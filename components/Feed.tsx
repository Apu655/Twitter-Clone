import React from 'react'
import {RefreshIcon} from "@heroicons/react/outline"
import TweetBox from './TweetBox'
import {Tweet} from "../utils/typings"
import TweetComponent from "./Tweet"
type Props = {
  tweets:Tweet[]
}

export default function Feed({tweets}: Props) {
  return (
    <section className='col-span-7 md:col-span-5 border-x '>
      <div className='flex justify-between items-center '>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon className='h-8 w-8 text-twitter cursor-pointer mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>

      </div>
      {/* TweetBox */}
      <div>
         <TweetBox/>
      </div>
      <div className=''>
        {tweets.map((tweet)=>(
          <TweetComponent key={tweet._id} tweet={tweet}/>
        ))}
      </div>

    </section>
  )
} 