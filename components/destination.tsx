import React from 'react'
import Image from 'next/image'

const destinationContent = [
    {
        id: 0,
        img: '/images/rome.png',
        location: 'Rome, Italy',
        amount: '$5,42k',
        duration: '10 Days Trip'
    },
    {
        id: 1,
        img: '/images/london.jpg',
        location: 'London, UK',
        amount: '$4.2k',
        duration: '12 Days Trip'
    },
    {
        id: 2,
        img: '/images/europe.png',
        location: 'Full Europe',
        amount: '$15k',
        duration: '28 Days Trip'
    }
]

const Destination = () => {
    return (
        <section>
            <p>Top Selling</p>
            <h2>Top Destinations</h2>
            <div>
                {destinationContent.map((destination, index) => (
                    <div key={index}>
                        <Image src={destination.img} alt='destinations' width='400' height='600' />
                        <div>
                            <p>{destination.location}</p>
                            <p>{destination.amount}</p>
                        </div>
                        <div>
                            <Image src='/images/navigation.png' alt='small plane' width='10' height='10' />
                            <p>{destination.duration}</p>
                        </div>
                    </div>
                ))}
                <Image src='/images/Decore.png' alt='spring' width='60' height='100' />
            </div>
        </section>
    )
}

export default Destination;