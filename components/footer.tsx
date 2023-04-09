import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='mt-[7rem] pb-[2rem] mx-auto w-[92%] flex justify-center sm:items-center gap-4 sm:gap-8 flex-wrap flex-col sm:flex-row'>
            <div>
                <Image src='/images/Jadoo.png' alt='Logo' height='100' width='100' />
                <p className='text-primary-300 text-[.8rem] font-semibold mt-4'>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div>
                <h2>Company</h2>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Mobile</li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul>
                    <li>Help/FAQ</li>
                    <li>Press</li>
                    <li>Affiliates</li>
                </ul>
            </div>
            <div>
                <h2>More</h2>
                <ul>
                    <li>Airline fees</li>
                    <li>Airline</li>
                    <li>Low fare tips</li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='flex items-center justify-center gap-4'>
                    <Image src='/images/facebook-icon.png' alt='facebook' height='50' width='50' />
                    <Image src='/images/ig-icon.png' alt='instagram' height='60' width='60' />
                    <Image src='/images/twitter-icon.png' alt='twitter' height='50' width='50' />
                </div>
                <h2 className='text-primary-300 font-medium'>Discover our app</h2>
                <div className='flex items-center justify-center gap-4'>
                    <Image src='/images/google-play.png' alt='play store' height='80' width='80' />
                    <Image src='/images/applestore.png' alt='apple store' height='80' width='80' />
                </div>
            </div>
        </footer>
    )
}

export default Footer