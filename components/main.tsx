import React from 'react';
import Image from 'next/image';

const Main = () => {
    return (
        <React.Fragment>
            <nav className='pt-6 pb-[3rem] md:pb-[5rem] flex justify-between mx-auto w-[96%] md:w-[90%]'>
                <Image src='/images/Logo.png' alt='logo' width='90' height='90' className='h-auto w-auto' />
                <ul className='hidden md:flex justify-center gap-4 lg:gap-12 items-center ml-[10%]'>
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <li>Login</li>
                    <li className='rounded-md border-2 border-primary-100 px-2 py-1 hover:bg-primary-100 hover:text-slate-100'>Sign Up</li>
                    <li className='flex gap-1 items-center justify-center nowrap'>EN <button>
                        <Image src='/images/down-arrow.png' alt='arrow' width='10' height='10' className='h-auto w-auto' />
                    </button></li>
                </ul>
            </nav>

            <main className='flex flex-col md:flex-row gap-6 mx-auto w-[94%] md:w-[90%]'>
                <section className='flex flex-col gap-4'>
                    <p className='text-secondary-100 font-bold uppercase'>Best Destinations around the world</p>
                    <h1 className='text-primary-200 font-bold text-[3rem] md:text-[5rem] leading-none lg:w-[80%]'>Travel, enjoy and live a new and full life</h1>
                    <p className='text-primary-300 font-normal lg:w-[80%]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className='flex sm:gap-6 items-center flex-wrap'>
                        <button className='rounded-md bg-secondary-200 px-6 py-3 text-slate-100'>Find out more</button>
                        <div className='flex items-center'>
                            <button className='pt-6'>
                            <Image src='/images/play.png' alt='play' width='80' height='80' />
                        </button>
                        <span className='text-[#686D77] font-[500] ml-[-1rem]'>Play Demo</span>
                        </div>
                    </div>
                </section>
                <div className='relative'>
                    <Image src='/images/airplane.png' alt='airplane' width='150' height='150' className='hidden lg:block absolute top-0 left-20' />
                    <Image src='/images/hero-img.png' alt='hero' width='740' height='765' priority className='min-h-[35rem] min-w-full w-[70rem]' />
                    <Image src='/images/airplane.png' alt='airplane' width='100' height='100' className='hidden lg:block absolute top-20 right-0' />
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main;