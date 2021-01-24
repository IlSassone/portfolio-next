import Logo from '../components/Logo'
import Link from 'next/link'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import {ChevronRight} from 'react-feather';
export default function Index (){
  
  return(
    <>
    <Head>
      <title>Mattia Ferrari | Portfolio</title>
    </Head>
    <div className='dark:bg-gray-900'>
      <main className="grid grid-cols-1">
        <div className="mx-auto w-10/12 md:w-2/4 lg:w-5/12 ">
          <Logo />
        </div>
        
        <div className="typewriter text-2xl md:text-3xl lg:text-5xl dark:text-gray-300 mx-auto text-center w-screen md:w-1/3 lg:w-1/2 ">
          <Typewriter
            options={{
              strings: ['Hi, I\'m Mattia.',
                'I\'m a web developer wannabe.',
                'This is my portfolio.',
                'I hope you\'ll like it.',
                'Click Next!'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mx-auto text-center w-screen md:w-1/3 lg:w-1/2 ">
          <Link href='/home'>
            <button className='focus:bg-red-700 focus:outline-none inline-flex rounded-lg shadow-md text-gray-200 bg-red-600 pr-3 pl-5 py-4'>NEXT &nbsp;&nbsp;&nbsp;<ChevronRight /></button>
          </Link>
        </div>

      </main>
    </div>
    </>
  );
}