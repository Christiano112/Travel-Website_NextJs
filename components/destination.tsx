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
        img: '/images/london.png',
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
        <section className='pt-[7rem] relative mx-auto w-[98%] md:w-[90%]'>
            <p className='p'>Top Selling</p>
            <h2 className='h2'>Top Destinations</h2>
            <div className='flex items-center justify-evenly gap-8 mt-[2rem] md:mt-[4rem] flex-wrap lg:flex-nowrap mx-auto w-[90%]'>
                {destinationContent.map((destination, index) => (
                    <div key={index} className='flex flex-col rounded-2xl pb-4 shadow-2xl z-10'>
                        <Image src={destination.img} alt='destinations' width='400' height='600' className='justify-self-center mb-[-3rem] sm:mb-[-5rem]' />
                        <div className='flex justify-between px-4 mb-4'>
                            <p className='text-primary-300 font-medium text-md md:text-lg'>{destination.location}</p>
                            <p className='text-primary-300 font-medium text-md md:text-lg'>{destination.amount}</p>
                        </div>
                        <div className='flex items-center gap-2 px-4'>
                            <Image src='/images/navigation.png' alt='small plane' width='10' height='10' />
                            <p className='text-primary-300 font-medium text-sm md:text-lg'>{destination.duration}</p>
                        </div>
                    </div>
                ))}
                <Image src='/images/Decore.png' alt='spring' width='60' height='100' className='hidden lg:block absolute right-0 top-60' />
            </div>
        </section>
    )
}

export default Destination;