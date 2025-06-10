import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex items-center p-4 shadow-md border-gray-500 border-b-1">
            <div className="w-50 flex justify-start">
                <Image src="/9plus_logo.png" alt="Logo" width={100} height={100} />
            </div>
            <nav className="w-3/4 flex flex-1 space-x-6 text-xl p-2">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
            <div className='w-1/4 flex justify-end'>
                <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
                <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2">Register</Link>
            </div>
        </header>
    )
}