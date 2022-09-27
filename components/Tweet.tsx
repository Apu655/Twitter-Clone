import React from 'react'
import { Tweet } from '../utils/typings'
import TimeAgo from 'react-timeago'
import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline'
type Props = {
    tweet:Tweet
}

const Tweet = ({tweet}: Props) => {
  return (
    <div className='px-4 shadow-lg overflow-y-scroll'>
        <div className=''>
                <div className='flex'>
                    <img className='rounded-full h-10  object-contain' src={tweet.profileImg}/>
                    <div className='ml-2'>
                        <div className='flex'>
                            <p className='flex  font-bold text-sm'>{tweet.username} </p>
                            <p className='ml-4 flex font-extralight text-gray-500 items-center text-xs'>@{tweet.username.replace(/\s+/g,"")}</p>
                        </div>

                        <TimeAgo className='text-xs flex font-light text-gray-500' date={tweet._createdAt}/>
                        <p className='py-1 text-sm'>{tweet.text} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, sapiente ipsum vitae, odit ratione consequatur quia sunt fugit, consequuntur aspernatur atque quod blanditiis nesciunt itaque eius commodi nemo tempore sit!</p>
                        {tweet.image && <img className='object-cover py-4 rounded-md' src={tweet.image}/>}
                    </div>
                </div>
            <div>
                <div>
                    <ChatAlt2Icon className='h-4 w-4'/>
                </div>
                <div>
                    <SwitchHorizontalIcon className='h-4 w-4'/>
                </div>
                <div>
                    <HeartIcon className='h-4 w-4'/>
                </div>
                <div>
                    <UploadIcon className='h-4 w-4'/>
                </div>
                Hajdoiwjaodaw
                
            </div>
        </div>
        
    </div>
  )
}

export default Tweet