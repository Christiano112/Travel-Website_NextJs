import React from 'react';
import Image from 'next/image'

const About = () => {
    return (
        <article>
            <section>
                <p>Testimonials</p>
                <h2>What people say about Us.</h2>
                <div>
                    pagination
                </div>
            </section>
            <div>
                <div>
                    <Image src='/images/profile-pic.png' alt='man' height='100' width='100' />
                </div>
                <div>
                    <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                    <p>Mike taylor</p>
                    <p>Lahore, Pakistan</p>
                </div>
                <Image src='/images/down-arrow.png' alt='arrow' height='100' width='100' />
                <div>
                    <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                    <p>Chris Thomas</p>
                    <p>CEO of Red Button</p>
                </div>
            </div>

            <div>
                <Image src='/images/axon.png' alt='axon' height='100' width='100' />
                <Image src='/images/jet-star.png' alt='jetstar' height='100' width='100' />
                <Image src='/images/expedia.png' alt='expedia' height='100' width='100' />
                <Image src='/images/qantas.png' alt='qantas' height='100' width='100' />
                <Image src='/images/allitalia.png' alt='allitalia' height='100' width='100' />
            </div>
        </article>
    )
}

export default About;