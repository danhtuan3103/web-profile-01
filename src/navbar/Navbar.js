import styles from './Navbar.module.css'
import clsx from 'clsx'
import avatar from '../img/avatar.png'


import { Link, Outlet } from 'react-router-dom'
import { useRef, useEffect } from 'react'



function Navbar() {

    const lineRef = useRef()
    useEffect(() => {
        const overlay = document.querySelector('.overlay')
        const tabActive = document.querySelector('.item.active')
        const menuIcon = document.querySelector('.menuIcon')

        lineRef.current.style.left = tabActive.offsetLeft + 'px';
        lineRef.current.style.width = tabActive.offsetWidth + 'px';

        const tabs = document.querySelectorAll('.item');
        tabs.forEach((tab, index) => {

            tab.onclick = function () {
                lineRef.current.style.left = this.offsetLeft + 'px';
                lineRef.current.style.width = this.offsetWidth + 'px';
                tab.classList.add('active')
                overlay.style.display = 'none'
                menuIcon.style.display = 'block'

                


            }
        })

    }, [])

    useEffect(() => {
        const menuIcon = document.querySelector('.menuIcon')
        const none = document.querySelector('.none')
        const overlay = document.querySelector('.overlay')

        console.log(menuIcon)
        menuIcon.onclick = function () {
            overlay.style.display = 'flex'
            menuIcon.style.display = 'none'
        }

        none.onclick = function () { 
            overlay.style.display = 'none'
            menuIcon.style.display = 'block'

            
        }
    }, [])





    return (
        <>
            <div className={styles.navbar}>
                <h1 className={styles.name}><a href='/'>DanhTuan</a></h1>
                <ul className={styles.listItem}>
                    <li className={clsx(styles.navItem, 'item', 'active')}><Link to='/'>Introduction</Link></li>
                    <li className={clsx(styles.navItem, 'item')}><Link to='/about-me'>About me</Link></li>
                    <li className={clsx(styles.navItem, 'item')}><Link to='/my-profile'>My Profile</Link></li>
                    <li className={clsx(styles.navItem, 'item')}><Link to='/contact'>Contact me</Link></li>
                    <Outlet />
                    <div ref={lineRef} className={styles.line}></div>
                </ul>
                <div className={clsx(styles.menuIconBlock)}>

                    <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" className={clsx(styles.menuIcon, 'menuIcon')} />
                </div>

                <div className={clsx(styles.overlay, 'overlay')}>
                    <div className={clsx(styles.avatarBlock)}>
                        <img src={avatar} className={styles.avatar} alt='Avatar'></img>
                    </div>
                    <span className={clsx(styles.none, 'none')}>&times;</span>
                    <ul className={styles.listItemMobile}>
                        <li className={clsx(styles.navItemMobile, 'item', 'active')}><Link to='/'>Introduction</Link></li>
                        <li className={clsx(styles.navItemMobile, 'item')}><Link to='/about-me'>About me</Link></li>
                        <li className={clsx(styles.navItemMobile, 'item')}><Link to='/my-profile'>My Profile</Link></li>
                        <li className={clsx(styles.navItemMobile, 'item')}><Link to='/contact'>Contact me</Link></li>
                        <li className={clsx(styles.navItemMobile, 'item')}><Link to='/question'>Question</Link></li>
                        <Outlet />
                        {/* <div ref={lineRef} className={styles.line}></div> */}

                    </ul>

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

            </div>
        </>
    )
}

export default Navbar
