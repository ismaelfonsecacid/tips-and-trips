import Link from "next/link"
export default function MobileNav({open, onClick,close}) {

    return (
    
    <div className={`absolute w-full h-screen bg-red-300 z-50 top-0 left-0 transform ${!open && '-translate-x-full'} transition duration-200 ease-in-out`}>
        <div className="flex items-center justify-center">
            <button className=" bg-blue-400 p-14" onClick={onClick}>X</button>
        </div>

            <div className="flex flex-col items-center m-14 gap-5 ">
                <Link href="/" className="p-14 bg-orange-500 border-2" onClick={close}>a</Link>
                <Link href="/b" className="p-14 bg-orange-500 border-2" onClick={close}>b</Link>
                <Link href="/c " className="p-14 bg-orange-500 border-2" onClick={close}>c</Link>
            </div>
    </div>
    
    )

}