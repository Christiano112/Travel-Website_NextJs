import React from 'react';
import Image from 'next/image';

const Main = () => {
    return (
        <React.Fragment>
            <nav>
                <Image src='/images/Logo.png' alt='logo' width='90' height='90' />
                <ul>
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                    <li>EN <span><Image src='/images/down-arrow.png' alt='arrow' width='10' height='10' /></span></li>
                </ul>
            </nav>

            <main>
                <section>
                    <p>Best Destinations around the world</p>
                    <h1>Travel, enjoy and live a new and full life</h1>
                    <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div>
                        <button>Find out more</button>
                        <div>
                            <div>
                                <Image src='/images/play.png' alt='play' width='60' height='60' />
                                <Image src='/images/play-icon.png' alt='play' width='20' height='20' />
                            </div>
                            <span>Play Demo</span>
                        </div>
                    </div>
                </section>
                <div>
                    <Image src='/images/airplane.png' alt='airplane' width='150' height='150' />
                    <Image src='/images/hero-img.png' alt='hero' width='500' height='500' priority />
                    <Image src='/images/airplane.png' alt='airplane' width='100' height='100' />
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main;