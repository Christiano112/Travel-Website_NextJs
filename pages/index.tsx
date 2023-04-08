import Head from 'next/head'
import React from 'react';
import Main from '../components/main'
import Services from '../components/services'
import Destination from '../components/destination';
import Trip from '../components/trip';
import About from '../components/about';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Jadoo Travel Agency</title>
        <meta name="description" content="A Traveling Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Jadoo.png" />
      </Head>

      <div className='box-border bg-scroll bg-no-repeat bg-right-top bg-[length:50rem_40rem]'
            style={{
                backgroundImage: 'url(/images/mainBG.png)'
            }}>
        <Main />
        <Services />
        <Destination />
        <Trip />
        <About />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
