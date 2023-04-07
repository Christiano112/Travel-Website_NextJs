import React from 'react'
import Image from 'next/image'


const serviceContent = [
    {
        img: '/images/satelite.png',
        head: 'Calculated Weather',
        content: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
        img: '/images/plane.png',
        head: 'Best Flights',
        content: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
        img: '/images/mic.png',
        head: 'Local Events',
        content: 'Barton vanity itself do in it. Preferred to men it engrossed listening.'
    },
    {
        img: '/images/customization.png',
        head: 'Customization',
        content: 'We deliver outsourced aviation services for military customers'
    }
]

const Services = () => {
    return (
        <section>
            <p>CATEGORY</p>
            <h2>We Offer Best Services</h2>
            <Image src='/images/crosses.png' alt='crosses' width='100' height='100' />
            <div>
                {serviceContent.map((service, index) => (
                    <div key={index}>
                        <Image src={service.img} alt='services' width='80' height='80' />
                        <h4>{service.head}</h4>
                        <p>{service.content}</p>
                    </div>
                ))}
                <Image src='/images/orange-rect.png' alt='rounded-rectangle' width='80' height='80' />
            </div>
        </section>
    )
}

export default Services;