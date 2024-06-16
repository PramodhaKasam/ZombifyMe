import './about.css'
import logo from './images.jpeg'
import { Link } from 'react-router-dom'
import zombies2 from './zombies-2.png'

function About()
{
    return(
        <>
            <div className="top-section">
                <img src={logo} alt="logo" className="hand"/>   
                <Link to='/'>
                    <h1>ZombifyMe</h1>
                </Link>
            </div>
            <div className='part'>
                <div className='paras'>
                    <p className='about-text'>
                            This website is designed to provide a fun and unique zombie-themed transformation
                            for any name or text inputted by the user. The input can be any sequence of lowercase
                            letters, and the website employs a special algorithm to generate a corresponding zombie
                            version for each character entered.

                    </p>
                    <p className='about-text'>
                           
                            Our algorithm ensures that every name or phrase, regardless of its origin or meaning, is
                            transformed into a whimsical zombie counterpart. The process is entirely automated and impartial, 
                            focusing solely on the characters typed in. Whether you're curious about how your name would look
                            in zombie form or just want to have some lighthearted fun, this website is here to deliver a
                            delightful and non-offensive zombie transformation.

                    </p>
                    <p className='about-text'>
                           

                            The main objective of this platform is to entertain and amuse users by converting their input into a quirky,
                            undead variant. It's a lighthearted tool meant to spark joy and creativity, and it is important to emphasize that
                            it is not designed to offend or target any individual or group. 
                            So go ahead, enter any string of lowercase letters, and watch as our algorithm brings out the zombie version of your
                            input in an enjoyable and harmless way.
                    </p>
                </div>
                
                <img src={zombies2} alt='zombies2' className='zombies2'/>
                
            </div>
           
        </>
    )
}

export default About