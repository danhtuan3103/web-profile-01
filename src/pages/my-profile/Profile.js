import styles from './Profile.module.css'
import clsx from 'clsx'
import avatar from '../../img/avatar.png'
import StudyProcess from './profileMenu/study/StudyProcess'
import Experience from './profileMenu/experience/Experience'
import MyWorks from './profileMenu/works/MyWorks'
import React, { useState, useEffect , useRef } from 'react';
import { Link } from 'react-router-dom'

function Profile() {

    console.log('re-render')
    const [contentStudy, setContentStudy] = useState(true);
    const [contentExperiece, setContentExperiece] = useState(false);
    const [contentWorks, setContentWorks] = useState(false);

  
    const handleStudy = (e) => {
        setContentWorks(false);
        setContentExperiece(false);
        setContentStudy(true);

    }

    const handleWorks = (e) => {
        setContentStudy(false);
        
        setContentExperiece(false);
        setContentWorks(true);

   
    }

    const handleExperiece = (e) => {
        setContentStudy(false);
        setContentWorks(false);
        setContentExperiece(true);

    }

    //Change Color on a tag

    const a1 = useRef()
    const a2 = useRef()
    const a3 = useRef()
    useEffect(() => {
        if(contentStudy === true){
            a1.current.style.color = 'var(--first-color)';
        } else {
            a1.current.style.color = '';
        }
    }, [contentStudy])

    useEffect(() => {
        if(contentExperiece === true){
            a2.current.style.color = 'var(--first-color)';
        } else {
            a2.current.style.color = '';
        }
    }, [contentExperiece])

    useEffect(() => {
        if(contentWorks === true){
            a3.current.style.color = 'var(--first-color)';
        } else {
            a3.current.style.color = '';
        }
    }, [contentWorks])


    //Images Modal
    useEffect(() => {
        var modal = document.getElementById("myModal");
        var img = document.querySelector(".myAvatar");
        var modalImg = document.getElementById("img01");
        var captionText = document.querySelector(".caption");

        img.onclick = function(){
            console.log(this.firstChild.src)
            modal.style.display = "block";
            modalImg.src = this.firstChild.src;
            console.log(captionText)
            captionText.innerHTML = this.firstChild.alt;
          }

        var span = document.querySelector(".close");      
          
        span.onclick = function() { 
            modal.style.display = "none";
          }
    },[])
    return (
        <div className={styles.profileContainer}>
            <div className={styles.menuProfile}>
                <div className={clsx(styles.avatarBlock, 'myAvatar')}>
                    <img src={avatar} className={styles.avatar} alt='Avatar'></img>
                </div>
                <h3>I'm Danh Tuan</h3>

                <div id="myModal" className={styles.modal}>
                    <span className={clsx(styles.close, 'close')}>&times;</span>
                    <img className={styles.modalContent} id="img01" />
                        <div className={clsx(styles.caption, 'caption')}></div>
                </div>

                <div className={styles.nav}>
                    <ul className='list'>
                        <li><a ref={a1} onClick={(e) => handleStudy(e)}> Study Process</a></li>
                        <li><a ref={a2} onClick={(e) => handleExperiece(e)}>Experience</a></li>
                        <li><a ref={a3} onClick={(e) => handleWorks(e)}>My Works</a></li>
                    </ul>
                </div>

            </div>

            <div className={styles.content}>
                {contentStudy && <StudyProcess />}
                {contentExperiece && <Experience />}
                {contentWorks && <MyWorks />}
            </div>

        </div>
    )
}

export default Profile