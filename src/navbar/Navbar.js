import styles from './Navbar.module.css'
import clsx from 'clsx'
 
import { Link, Outlet} from 'react-router-dom'
import {useRef, useEffect} from 'react'



function  Navbar () {

    const lineRef = useRef()
    useEffect(() => {
        const tabActive = document.querySelector('.item.active')
        lineRef.current.style.left = tabActive.offsetLeft + 'px';
        lineRef.current.style.width = tabActive.offsetWidth + 'px';

        const tabs = document.querySelectorAll('.item');
        tabs.forEach((tab, index) => {

            tab.onclick = function () {
                lineRef.current.style.left = this.offsetLeft + 'px';
                lineRef .current.style.width = this.offsetWidth + 'px';
                tab.classList.add('active')

            }


        })


    }, [])



    return (
        <>
            <div className={styles.navbar}>
                <h1 className={styles.name}><a href='/'>DanhTuan</a></h1>
                <ul className={styles.listItem}>
                    <li className={clsx(styles.navItem,'item','active')}><Link to='/'>Introduction</Link></li>
                    <li className={clsx(styles.navItem,'item')}><Link to='/about-me'>About me</Link></li>
                    <li className={clsx(styles.navItem,'item')}><Link to='/my-profile'>My Profile</Link></li>
                    <li className={clsx(styles.navItem,'item')}><Link to='/contact'>Contact me</Link></li>
                    <Outlet />
                    <div ref={lineRef} className={styles.line}></div>
                </ul>
            </div>
        </>
    )
}

export default Navbar
