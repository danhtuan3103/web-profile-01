import {useEffect, useRef} from 'react';

import styles from './Content.module.css'
import img from '../img/avatar_cartoon_rmbr.png'
import clsx from 'clsx'
import Typed from 'typed.js'

import { Link } from 'react-router-dom'
function Content() {

    const textRef = useRef();
    
    useEffect(() => {
        const typed = new Typed( textRef.current, {
            strings: ["Danh Tuan","Soongsil student", "Front-end developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
          });

    },[])
    return (
        <>  
            <div className={styles.infoBlock}>
                <div className={styles.textBlock}>
                    <p>Hello,</p>
                    <p>I am <strong ref={textRef} >Danh Tuan</strong></p>
                    <p>You can't make an omelet without breaking some eggs</p>
                    <div className={styles.checkBlock}>
                        <input type='radio' className={styles.checkbox}/><span>Trust</span>
                        <input type='radio' className={styles.checkbox}/><span>Result Oriented</span>
                        <input type='radio' className={styles.checkbox}/><span>Next Level Expert</span>
                    </div>

                    <div className={styles.btnBlock}> 
                        <div className={clsx(styles.divBtn)}>
                            <Link to='/contact' className={clsx(styles.btn)}>Hire me</Link>
                        </div>
                        <div className={clsx(styles.divBtn)}>
                            <Link to='/' className={clsx(styles.btn)}>See My Works</Link>
                        </div>
                    </div>
                </div>

                <div className='imgBlock'>
                    <img src={img} className={styles.imgInfo} style={{width: 600}}/>
                </div>
            </div>
        </>
    )
}

export default Content;