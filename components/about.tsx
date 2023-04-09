import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <React.Fragment>
            <article className="pt-[7rem] relative mx-auto w-[92%] md:w-[90%] flex flex-col md:flex-row gap-6 justify-between md:items-center">
                <section className="md:basis-1/2">
                    <p className="p-alt">Testimonials</p>
                    <h2 className="h2-alt">What people say about Us.</h2>
                </section>

                <div className="relative md:basis-1/2">
                    <Image
                        src="/images/profile-pic.png"
                        alt="man"
                        height="50"
                        width="50"
                        className="absolute top-0 left-0 md:ml-[-2.5rem]"
                    />
                    <div className="rounded-2xl p-4 shadow-2xl w-[80%] z-50 ml-[2.5rem] md:ml-0">
                        <p className="text-primary-300 font-medium">
                            “On the Windows talking painted pasture yet its express parties
                            use. Sure last upon he same as knew next. Of believed or diverted
                            no.”
                        </p>
                        <p className="text-primary-300 font-bold text-[1.1rem] mt-6">
                            Mike taylor
                        </p>
                        <p className="text-primary-300 font-medium text-[.8rem]">
                            Lahore, Pakistan
                        </p>
                    </div>
                    <Image
                        src="/images/down-arrow.png"
                        alt="arrow"
                        height="15"
                        width="15"
                        className='hidden lg:block absolute right-20 top-20'
                    />
                    <div className="hidden sm:block rounded-2xl p-4 shadow-lg w-[80%] absolute top-20 left-20 z-0">
                        <p className="text-primary-300 font-medium z-0 opacity-0">
                            “On the Windows talking painted pasture yet its express parties
                            use. Sure last upon he same as knew next. Of believed or diverted
                            no.”
                        </p>
                        <p className="text-primary-300 font-bold text-[1.1rem] mt-6">Chris Thomas</p>
                        <p className="text-primary-300 font-medium text-[.8rem]">CEO of Red Button</p>
                    </div>
                </div>
            </article>

            <div className="flex flex-wrap justify-evenly gap-4 items-center mt-[5rem] md:mt-[7rem] mx-auto w-[96%] md:w-[90%] px-4">
                <Image src="/images/axon.png" alt="axon" height="100" width="100" />
                <Image
                    src="/images/jet-star.png"
                    alt="jetstar"
                    height="100"
                    width="100"
                />
                <Image
                    src="/images/expedia.png"
                    alt="expedia"
                    height="100"
                    width="100"
                />
                <Image src="/images/qantas.png" alt="qantas" height="100" width="100" />
                <Image
                    src="/images/allitalia.png"
                    alt="allitalia"
                    height="100"
                    width="100"
                />
            </div>
        </React.Fragment>
    );
};

export default About;
