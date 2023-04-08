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
        <section className='pt-[5rem] relative mx-auto w-[96%] md:w-[90%]'>
            <p className='p'>CATEGORY</p>
            <h2 className='h2'>We Offer Best Services</h2>
            <Image src='/images/crosses.png' alt='crosses' width='100' height='100' className='hidden sm:block absolute top-20 right-10' />
            <div className='flex items-center justify-center gap-8 mt-[2rem] md:mt-[4rem] relative flex-wrap lg:flex-nowrap'>
                {serviceContent.map((service, index) => (
                    <div key={index} className='min-h-max h-[15rem] min-w-[full] w-[20rem] flex flex-col items-center text-center gap-2 rounded-3xl bg-[#fff] p-4 z-10 shadow-2xl hover:scale-110'>
                        <Image src={service.img} alt='services' width='80' height='80' className='mb-4' />
                        <h4 className='text-primary-500 font-semibold'>{service.head}</h4>
                        <p className='text-primary-300'>{service.content}</p>
                    </div>
                ))}
                <Image src='/images/orange-rect.png' alt='rounded-rectangle' width='80' height='80' className='absolute bottom-0 left-30' />
            </div>
        </section>
    )
}

export default Services;