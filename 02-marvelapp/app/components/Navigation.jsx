// import styles from './Navigation.module.css'
import styles from './NavigationTop.module.css'

export default function Navigation() {


    return (
        <nav className={styles.navbar}>
            <div className={styles.leftZone}>
                <a className={styles.loginLink} href="#">Login</a>
            </div>
            <div className={styles.middleZone}>
                <img src="/images/logo.png" alt="Image" style={{width:'100px'}}/>
            </div>
            <div className={styles.right}>
                <img src='	https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png' style={{height:'25px',marginRight:'10px'}}></img>
                    <div>
                        <p style={{color:'white'}}>Marvel Unlimited</p>
                        <span style={{color:'white'}}>Subscribe</span>
                    </div>
            </div>
        </nav>

    )

}
    // <header className={styles.header}>
    //     <nav className={styles.nav}>
    //         <ul className={styles.menu}>
    //             <li><a href="#">Characters</a></li>
    //             <li><a href="#">Comics</a></li>
    //             <li><a href="#">Movies</a></li>
    //             <li><a href="#">TV Shows</a></li>
    //             <li><a href="#">Shop</a></li>
    //         </ul>
    //     </nav>
    // </header>