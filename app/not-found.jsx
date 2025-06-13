'use client'

import Link from 'next/link'

const NotFound = () => {
    return (
        <section>
            <div className='grid-background'></div>
            <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                <h1 className="text-6xl font-bold custom-gradient-title">404</h1>
                <p className="text-3xl font-bold custom-gradient-title mt-2">
                    Oops! The page you are looking for does not exist.
                </p>
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt="Error Illustration"
                    className="w-80 mt-6"
                />
                <Link
                    href="/"
                    className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
                >
                    Go to Homepage
                </Link>
            </div>
        </section>
    )
}

export default NotFound
