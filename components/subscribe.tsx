import React from 'react'
import Image from 'next/image'

const Subscribe = () => {
    return (
        <article>
            <div>
                <Image src='/images/send.png' alt='send btn' height='100' width='100' />
                <Image src='/images/footer-right-spring.png' alt='spring' height='100' width='100' />
            </div>
            <h2>Subscribe to get information, latest news and other
                interesting offers about Jadoo</h2>
            <input type='text' placeholder='Your email' />
            <button>Subscribe</button>
            <Image src='/images/footer-left-spring.png' alt='spring' height='100' width='100' />
            <Image src='/images/crosses.png' alt='crosses' height='200' width='200' />
        </article>
    )
}

export default Subscribe;