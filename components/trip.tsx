import React from 'react'
import Image from 'next/image'

const tripContent = [
    {
        img: '/images/yellow-box.png',
        head: 'Choose Destination'
    },
    {
        img: '/images/orange-box.png',
        head: 'Make Payment'
    },
    {
        img: '/images/blue-box.png',
        head: 'Reach Airport on Selected Date'
    }
]

const Trip = () => {
    return (
        <article>
            <section>
                <p>Easy and Fast</p>
                <h2>Book your next trip in 3 easy steps</h2>
                <div>
                    {tripContent.map((trip, index) => (
                        <div key={index}>
                            <Image src={trip.img} alt='trips' width='30' height='30' />
                            <div>
                                <h6>{trip.head}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div>
                <div>
                    <Image src='/images/greece.jpg' alt='trips' width='200' height='150' priority />
                    <h6>Trip To Greece</h6>
                    <p>14-29 June | by Robbin joseph</p>
                    <div>
                        <Image src='/images/leaf.png' alt='leaf' width='15' height='15' />
                        <Image src='/images/book.png' alt='book' width='15' height='15' />
                        <Image src='/images/nav.png' alt='navigate' width='15' height='15' />
                    </div>
                    <div>
                        <Image src='/images/chair.png' alt='chair' width='15' height='15' />
                        <p>24 people going</p>
                        <Image src='/images/love.png' alt='love' width='15' height='15' />
                    </div>
                </div>
                <div>
                    <div>
                        <Image src='/images/round-rome.png' alt='rome' width='100' height='100' />
                        <div>
                            <p>Ongoing</p>
                            <h5>Trip to rome</h5>
                        </div>
                    </div>
                    <p><span>40% </span>completed</p>
                </div>
                <div>-----------------</div>
            </div>
        </article>
    )
}

export default Trip;