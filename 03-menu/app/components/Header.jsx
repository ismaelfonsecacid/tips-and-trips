'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import MobileNav from './MobileNavigation'

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        if (mobileNavOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [mobileNavOpen])



    return (
        <div>
            <button className='bg-red-600 border-2' onClick={() => setMobileNavOpen(true)}>HAMB</button>
            <MobileNav open={mobileNavOpen} onClick={() => setMobileNavOpen(false)} close={()=> setMobileNavOpen(false)} />
        </div>
    )

}