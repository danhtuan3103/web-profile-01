import styles from './Question.module.css'
import clsx from 'clsx';

function Question() {
    const storageData = JSON.parse(localStorage.getItem('datas'))
    console.log(storageData)

    return (
        <div className={styles.container}>
            <h1>Question</h1>
            <div className={styles.questionContainer}>
                {storageData.map((data, index) => {
                    console.log(data.firstName)
                    return (
                        <div key={index} className={styles.infoBlock}>
                            <h3>{data.firstName + ' ' + data.lastName} :</h3>
                            <p>{data.question}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Question