import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import {Tweet} from '../utils/typings'
interface Props{
  tweets:Tweet[]
}
const Home: NextPage = ({tweets}:Props) => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9 min-h-screen">
       {/* SIDEBAR */}
       <Sidebar/>
       <Feed tweets={tweets}/>
       {/* Feed */}

       {/* Widgets */}
       <Widgets/>
      </main>

    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps= async (context)=>{

  const tweets = await fetchTweets();

  return {
    props:{
      tweets,

    }
  }
}
