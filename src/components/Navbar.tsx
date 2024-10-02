// src/components/Navbar.tsx

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-orange-500 text-xl font-bold">
                    <Link href="/">
                        Portfolio-25
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <Link href="/" className="block px-4 py-2 text-white">
                        Home
                    </Link>
                    <Link href="#about" className="block px-4 py-2 text-white">
                        About
                    </Link>
                    <Link href="#work" className="block px-4 py-2 text-white">
                        Experience
                    </Link>
                    <Link href="#contact" className="block px-4 py-2 text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
