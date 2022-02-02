import styles from './StudyProcess.module.css'
import clsx from 'clsx'

import primary from '../../../../img/primary.jpeg'
import junior from '../../../../img/junie.jpeg'
import hight from '../../../../img/hight.webp'
import university from '../../../../img/univer.jpeg'

function StudyProcess () {
    return (

        <div className={styles.container}>
            <div className={clsx(styles.primary, styles.schoolBlock)}>
                    <h3>VoThiSau Primary School</h3>
                    <img src={primary}/>
            </div>

            <div className={clsx(styles.junior, styles.schoolBlock)}>
                    <h3>Nguyen Khuyen Junior Hight School</h3>
                    <img src={junior}/>

            </div>

            <div className={clsx(styles.hight, styles.schoolBlock)}>
                    <h3>Bu Dang Hight School</h3>
                    <img src={hight}/>
                    
            </div>

            <div className={clsx(styles.university, styles.schoolBlock)}>
                    <h3>Soongsil University School</h3>
                    <img src={university}/>

            </div>
        </div>
    )
}

export default StudyProcess