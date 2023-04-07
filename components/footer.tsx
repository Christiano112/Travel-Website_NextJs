import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div>
                <Image src='/images/Jadoo.png' alt='Logo' height='100' width='100' />
                <p>Book your trip in minute, get full Control for much longer.</p>
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
            <div>
                <div>
                    <Image src='/images/facebook-icon.png' alt='facebook' height='100' width='100' />
                    <Image src='/images/ig-icon.png' alt='instagram' height='100' width='100' />
                    <Image src='/images/twitter-icon.png' alt='twitter' height='100' width='100' />
                </div>
                <h2>Discover our app</h2>
                <div>
                    <Image src='/images/google-play.png' alt='play store' height='100' width='100' />
                    <Image src='/images/applestore.png' alt='apple store' height='100' width='100' />
                </div>
            </div>
        </footer>
    )
}

export default Footer