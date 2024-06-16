import { useState } from 'react'
import './Home.css'
import main from './main.png'
import logo from './images.jpeg'
import pics from './pic-4.avif'
import zombies from './zombies-1.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home(){
   const [data, setData] = useState('');
   let value;
    let name = document.querySelector('.input-name');
    const updateData = (e) =>{
            setData(e.target.value);
    }
    const nav = useNavigate();
    function move(){
        
        if(name.value != null && name.value == name.value.toLowerCase())
            {
                nav(`/Name/${data}`);
            }
            else if(name.value == null){
                alert("Enter a name!!");
            }
            else{
                alert("Error");
            }
    }

    function Change(){
        let user = document.querySelector('.user');
        let feed = document.querySelector('.feed');
        if(feed.value != '' && user.value !='')
            {
                alert("Feedback submitted successfully!");

            }
       
    }

    function go() {
       window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        
        <>
            <div className="top-section">
                <img src={logo} alt="logo" className="hand"/>
                <h1>ZombifyMe</h1>
                <Link to='/About'>
                    <h3 className='h3s'>About</h3>
                </Link>
                
                <h3 className='h32' onClick={go}>Feedback</h3>
            </div>
            <img src={pics} alt="pics" className='main-pic'/>
            <img src={main} alt="main" className='zombie'/>
            <div className='explore' background={zombies}>
                <p className='text'>
                    We create a zombie based on the name you give us, 
                    using precise calculations to ensure a perfect match. 
                    Go ahead and type your name below to see the zombie 
                    version of your name.
                </p>
                <input type='text' placeholder='Name' className='input-name' value={data} onChange={updateData} required/>
                
                    <button className='click' onClick={move} type='submit'>Enter</button>   

                    <p className='text-text'>
                        *Please make sure that all letters are in lower case and
                         there are no numbers and symbols in the name entered 
                        
                    </p>
                
                
            </div>
            <div className='x'>
                <img src={zombies} alt='zombies' className='end'/>
                <form>
                    
                    <input type='text' placeholder='Username'required className='user'/>
                    <input type='text' placeholder='Feedback'required className='feed'/>
                    <button type='submit' className='but' onClick={Change}>Submit</button>
                </form>
            </div>
            

        </>
    )
}

export default Home;

