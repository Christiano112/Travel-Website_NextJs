import React from 'react'
import Image from 'next/image'

const Subscribe = () => {
    return (
        <article className='mt-[3rem] sm:mt-[7rem] mx-auto w-[84%] sm:w-[80%] bg-[#DFD7F9] flex flex-col justify-center items-center p-6 sm:p-12 relative rounded-2xl rounded-tl-[3rem] sm:rounded-tl-[6rem]'>
            <Image src='/images/send.png' alt='send btn' height='30' width='30' className='absolute top-0 right-0 mt-[-.5rem] mr-[-.5rem] z-50' />
            <Image src='/images/footer-right-spring.png' alt='spring' height='80' width='80' className='absolute top-0 right-0' />
            <h2 className='text-center text-primary-300 font-semibold text-xl md:text-4xl w-[98%] md:w-[60%] mx-auto'>Subscribe to get information, latest news and other
                interesting offers about Jadoo</h2>
            <div className='flex justify-center gap-6 items-center flex-col sm:flex-row mt-[3rem]'>
                <input type='text' placeholder='Your email' className='px-6 py-2 rounded-md outline-1 max-w-[15rem] w-full' />
                <button className='px-4 py-2 text-white bg-gradient-to-r from-[#FF946D] from-0% to-[#FF7D68] to-100% rounded-lg'>Subscribe</button>
            </div>
            <Image src='/images/footer-left-spring.png' alt='spring' height='100' width='100' className='absolute bottom-0 left-0 overflow-hidden' />
            <Image src='/images/crosses.png' alt='crosses' height='100' width='100' className='absolute bottom-0 right-0 hidden sm:block mr-[-5rem] rotate-90' />
        </article>
    )
}

export default Subscribe;