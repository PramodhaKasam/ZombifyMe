import './Name.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import logo from './images.jpeg'
import zombie from './zombie-1.png'
import zombie1 from './zombie-2.png'
import zombie2 from './zombie-3.png'
import zombie3 from './zombie-4.png'
import zombie4 from './zombie-5.png'
import zombie5 from './zombie-6.png'
import zombie6 from './zombie-7.png'
import zombie7 from './zombie-8.png'
import zombie8 from './zombie-9.png'
import zombie9 from './zombie-10.png'
import zombie10 from './zombie-11.png'
import zombie11 from './zombie-12.png'
import zombie12 from './zombie-13.png'
import zombie13 from './zombie-14.png'
import zombie14 from './zombie-15.png'
import zombie15 from './zombie-16.webp'
import zombie16 from './zombie-17.png'
import zombie17 from './zombie-18.png'
import zombie18 from './zombie-19.png'
import zombie19 from './zombie-20.png'
import zombie20 from './zombie-21.png'
import zombie21 from './zombie-22.png'
import zombie22 from './zombie-23.png'
import zombie23 from './zombie-24.png'
import zombie24 from './zombie-25.png'
import zombie25 from './zombie-26.png'




function Name(){
    let params = useParams();
        let {extra} = params;
        let i;
        let sum =0;
        for (i=0; i< params.extra.length; i++)
            {
                let char_code = params.extra[i].charCodeAt(0);
                sum += char_code;
            }
            let zombieImage;
            let a = sum%26;
            switch(a)
            {
                case 0:{
                    zombieImage = zombie;
                    break;
                }
                case 1:{
                    zombieImage = zombie1;
                    break;
                }
                case 2:{
                    zombieImage = zombie2;
                    break;
                }
                case 3:{
                    zombieImage = zombie3;
                    break;
                }
                case 4:{
                    zombieImage = zombie4;
                    break;
                }
                case 5:{
                    zombieImage = zombie5;
                    break;
                }
                case 6:{
                    zombieImage = zombie6;
                    break;
                }
                 case 7:{
                    zombieImage = zombie7;
                    break;
                }
                case 8:{
                    zombieImage = zombie8;
                    break;
                }
                case 9:{
                    zombieImage = zombie9;
                    break;
                }
                case 10:{
                    zombieImage = zombie10;
                    break;
                }
                case 11:{
                    zombieImage = zombie11;
                    break;
                }
                case 12:{
                    zombieImage = zombie12;
                    break;
                }
                case 13:{
                    zombieImage = zombie13;
                    break;
                }
                case 14:{
                    zombieImage = zombie14;
                    break;
                }
                case 15:{
                    zombieImage = zombie15;
                    break;
                }
                case 16:{
                    zombieImage = zombie16;
                    break;
                }
                case 17:{
                    zombieImage = zombie17;
                    break;
                }
                case 18:{
                    zombieImage = zombie18;
                    break;
                }
                case 19:{
                    zombieImage = zombie19;
                    break;
                }
                case 20:{
                    zombieImage = zombie20;
                    break;
                }
                case 21:{
                    zombieImage = zombie21;
                    break;
                }
                case 22:{
                    zombieImage = zombie22;
                    break;
                }
                case 23:{
                    zombieImage = zombie23;
                    break;
                }
                case 24:{
                    zombieImage = zombie24;
                    break;
                }
                case 25:{
                    zombieImage = zombie25;
                    break;
                } 
                default:{
                    zombieImage = zombie;
                }
            }
    return (
        <>
             <div className="top-section">
                <img src={logo} alt="logo" className="hand"/>
                <Link to='/'>
                    <h1>ZombifyMe</h1>
                </Link>
                
            </div>

           
                <img src={zombieImage} alt="zombie" className='img-zombie'/>
                <p className='img-text'> {extra}</p>
            

        </>
    )
}
export default Name