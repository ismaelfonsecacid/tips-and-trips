import Link from "next/link"
import styles from './Menu.module.css'
const links = [{
    route: '/news',
    label: 'NEWS'
},
{
    route: '/comics',
    label: 'COMICS'
},
{
    route: '/characters',
    label: 'CHARACTERS'
},
{
    route: '/tv-shows',
    label: 'TV SHOWS'
},
{
    route: '/games',
    label: 'GAMES'
},
{
    route: '/videos',
    label: 'VIDEOS'
},
{
    route: '/more',
    label: 'MORE'
},
]
export default function Menu() {



    return (
        <div>
            <ul className={styles.menu}>
                {links.map(({ label, route }) =>
                (<li key={route}>
                    <Link href={route}>{label}</Link>
                </li>)
                )}
            </ul>
        </div>
    )
}