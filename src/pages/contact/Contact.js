import styles from './Contact.module.css'
import clsx from 'clsx'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [datas, setDatas] = useState([])
    const text = document.querySelector('.success');

    const handleSubmit = () => {

        setDatas((prev) => {
            const newDatas = [...prev, {firstName, lastName, email, question}];
            const jsonDatas = JSON.stringify(newDatas)
            console.log(jsonDatas)
            localStorage.setItem('datas', jsonDatas)
            return newDatas
        } )

        text.textContent = 'Send a successful message'

    }

    useEffect(() => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setQuestion('')
    }, [datas])

    useEffect(() => {
        const inputForm = document.querySelectorAll('.input')
        inputForm.forEach((input) => {
            input.addEventListener('focus', () => { 
                text.textContent = ''
            })
        })

        window.onkeydown = (event) => {
            if(event.keyCode === 13) {
                handleSubmit();
            }
        }
    })
    return (
        <div className={styles.container}>
            <div className={styles.sendMesage}>
                <h3>Have some question ? 😊</h3>
                <p>Sample text. Click to select the text boc. Click again or double click to start editing the text</p>
                <form className={styles.formContact} action='/question'>
                    <input className='input' type='text' placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className='input' type='text' placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input className='input' type='email' placeholder='What is your email address?' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea className='input' placeholder='Your question' value={question} onChange={(e) => setQuestion(e.target.value)} />

                    <div className={styles.divBtn} >
                        <a onClick={handleSubmit}>Send question</a>
                    </div>

                    <div className={styles.textBlock}>
                        <p className={(clsx('success', styles.text))}></p>
                    </div>

               
                </form>
            </div>

            <div className={styles.contact}>
                <div className={styles.contactItem}>
                    <a href='https://www.facebook.com/profile.php?id=100015195702096'>
                        <img src="https://img.icons8.com/clouds/130/26e07f/facebook-new.png" />
                    </a>

                </div>
                <div className={styles.contactItem}>
                    <a href='mailto:danhtuan3103@gmail.com'>
                        <img src="https://img.icons8.com/clouds/130/26e07f/gmail-new.png" />
                    </a>
                </div>
                <div className={styles.contactItem}>
                    <a href='tel:01048976769'>
                        <img src="https://img.icons8.com/clouds/130/26e07f/apple-phone.png" />
                    </a>
                </div>

                <div className={styles.contactItem}>
                    <a href='https://www.instagram.com/danhtuan313/'>
                        <img src="https://img.icons8.com/clouds/130/26e07f/instagram-new--v3.png" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact