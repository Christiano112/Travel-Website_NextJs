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
        <article className='pt-[7rem] relative mx-auto w-[80%] sm:w-[92%] md:w-[90%] flex flex-col md:flex-row gap-6 justify-between sm:items-center'>
            <section className='md:basis-1/2'>
                <p className='p-alt'>Easy and Fast</p>
                <h2 className='h2-alt'>Book your next trip in 3 easy steps</h2>
                <div className='flex flex-col gap-4 mt-6'>
                    {tripContent.map((trip, index) => (
                        <div key={index} className='flex gap-4'>
                            <Image src={trip.img} alt='trips' width='20' height='20' className='object-contain w-[3rem] h-[3rem]' />
                            <div>
                                <h6 className='font-bold text-primary-300'>{trip.head}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className='relative md:basis-1/2 xl:basis-1/3'>
                <div className='flex flex-col gap-4 rounded-2xl p-4 shadow-2xl min-h-[20rem] h-full'>
                    <Image src='/images/greece.jpg' alt='trips' width='200' height='150' priority className='justify-self-center mx-auto w-[98%]' />
                    <h6 className='text-primary-600 font-medium'>Trip To Greece</h6>
                    <p className='text-primary-700 font-medium'>14-29 June | by Robbin joseph</p>
                    <div className='flex gap-4'>
                        <Image src='/images/leaf.png' alt='leaf' width='15' height='15' />
                        <Image src='/images/book.png' alt='book' width='15' height='15' />
                        <Image src='/images/nav.png' alt='navigate' width='15' height='15' />
                    </div>
                    <div className='flex gap-4 relative'>
                        <Image src='/images/chair.png' alt='chair' width='15' height='15' />
                        <p className='text-primary-700 font-me'>24 people going</p>
                        <Image src='/images/love.png' alt='love' width='15' height='15' className='justify-self-end absolute right-0 hover:bg-red-500' />
                    </div>
                </div>
                <div className='hidden sm:flex gap-2 bg-slate-100 rounded-2xl shadow-2xl p-2 z-10 absolute right-0 top-40'>
                    <Image src='/images/round-rome.png' alt='rome' width='50' height='50' className='rounded-full object-contain' />
                    <div>
                        <p className='text-primary-700 font-medium'>Ongoing</p>
                        <h6 className='text-primary-600 font-medium'>Trip to rome</h6>
                        <p className='text-primary-600'><span className='text-primary-700'>40% </span>completed</p>
                        <div className='bg-primary-300 h-2 rounded-2xl'><p className='w-[40%] bg-primary-600 h-2 rounded-2xl'></p></div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Trip;