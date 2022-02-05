import styles from './MyWorks.module.css'
import clsx from 'clsx'

import img1 from '../../../../img/avatar.png'
import video1 from '../../../../img/works.mp4'
import video2 from '../../../../img/magic.mp4'
import video3 from '../../../../img/dog.mp4'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function MyWorks() {

    console.log(SplideSlide)
    return (
        <div className={styles.container}>
            <div className={styles.sliderBlock}>
                <Splide
                    option={{
                        rewind: true,

                        gap: '1rem'
                    }}

                >
                    <SplideSlide>
                        <div>
                            <video className={styles.video} controls autoPlay='true'>
                                <source src={video1} type='video/mp4'></source>
                            </video>

                        </div>

                    </SplideSlide>
                    <SplideSlide>
                        <div>

                            <video className={styles.video} controls >
                                <source src={video2} type='video/mp4'></source>
                            </video>
                        </div>

                    </SplideSlide>
                    <SplideSlide>
                        <div>

                                <video className={styles.video} controls >
                                    <source src={video3} type='video/mp4'></source>
                                </video>

                        </div>

                    </SplideSlide>

                    <SplideSlide>
                        <div>
                            <img src={img1} className={styles.img} alt="Image 2" />
                        </div>
                    </SplideSlide>
                </Splide>

            </div>

            <div>

                <div className={styles.divBtn}>
                    <Link to='/contact'>Hire me</Link>
                </div>

            </div>
        </div>

    )
}

export default MyWorks