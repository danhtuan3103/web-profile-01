import styles from './MyWorks.module.css'
import clsx from 'clsx'

import img1 from '../../../../img/avatar.png'
import video from '../../../../img/works.mp4'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function MyWorks() {

    console.log(SplideSlide)
    return (
        <div className={styles.container}>
            <Splide 
            option={ {
                rewind: true,

                gap: '1rem'
            }}
            
            >
                <SplideSlide>
                    <div>
                        <a href='http://localhost:3000/'>
                            <video className={styles.video} controls autoPlay='true'>
                                <source  src={video} type='video/mp4'></source>
                            </video>
                        </a>
                    </div>
                    
                </SplideSlide>
                <SplideSlide>
                    <div>
                        <img src={img1} className={styles.img}  alt="Image 2" />
                    </div>
                </SplideSlide>
            </Splide>

            <div>

                <div className={styles.divBtn}>
                    <Link to='/contact'>Hire me</Link>
                </div>
                
            </div>
        </div>

    )
}

export default MyWorks