'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import MobileNav from './MobileNavigation'
import {usePathname} from "next/navigation"

export default function Header() {
    const pathName =  usePathname();
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        if (mobileNavOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [mobileNavOpen])

    useEffect(() => {
        setMobileNavOpen(false)
      }, [pathName])

    return (
        <div>
            <MobileNav open={mobileNavOpen} onClick={() => setMobileNavOpen(false)} />
            <button className='bg-red-600 border-2' onClick={() => setMobileNavOpen(true)}>HAMB</button>
        </div>
    )

}