import styles from './Experience.module.css'
import clsx from 'clsx'

import { useState } from 'react'

function Experience () {

    const [ slider, setSlider ] = useState(50)
    const [ slider1, setSlider1 ] = useState(89)
    const [ slider2, setSlider2] = useState(40)
    const [ slider3, setSlider3 ] = useState(69)


    return (
        <div className={styles.container}>
            <div className={styles.sliderBlock}>
                <label>HTML</label>
                <input type="range" min="1" max="100" value={slider} className={clsx(styles.slider, 'slider')} onChange={(e) => setSlider(e.target.value)} ></input>
                <input type='text' className={clsx(styles.numberInput, 'numberInput')} value={slider} onChange={(e) => setSlider(e.target.value)}></input>
            </div>

            <div className={styles.sliderBlock}>
                <label>CSS</label>
                <input type="range" min="1" max="100" value={slider1} className={clsx(styles.slider, 'slider')} onChange={(e) => setSlider1(e.target.value)}  ></input>
                <input type='text' className={clsx(styles.numberInput, 'numberInput')} value={slider1} onChange={(e) => setSlider1(e.target.value)}></input>
            </div>

            <div className={styles.sliderBlock}>
                <label>J</label>
                <input type="range" min="1" max="100" value={slider2} className={clsx(styles.slider, 'slider')} onChange={(e) => setSlider2(e.target.value)}  ></input>
                <input type='text' className={clsx(styles.numberInput, 'numberInput')} value={slider2} onChange={(e) => setSlider2(e.target.value)}></input>
            </div>

            <div className={styles.sliderBlock}>
                <label>C</label>
                <input type="range" min="1" max="100" value={slider3} className={clsx(styles.slider, 'slider')} onChange={(e) => setSlider3(e.target.value)}  ></input>
                <input type='text' className={clsx(styles.numberInput, 'numberInput')} value={slider3} onChange={(e) => setSlider3(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Experience