import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
    { name: "Home" },
    { name: "Technologies" },
    { name: "Projects" },
    { name: "About" },
    { name: "Contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="sticky top-0 border-b border-gray-100 bg-white">
            <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 lg:px-8">
                
                {/* Mobile hamburger */}
                
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-9 w-9 items-center justify-center md:hidden"

                >
                    <RxHamburgerMenu />
                </button>

                
                {/* Logo */}

                <img src={Logo} alt="logo" />

                {/* Desktop Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            className={`cursor-pointer text-[14px] transition-colors duration-200 ${index === 0
                                ? "font-medium text-[#e60073]"
                                : "text-[#4b5563] hover:text-[#e60073]"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                
                {/* Authentication */}

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="cursor-pointer whitespace-nowrap text-[13px] font-medium text-gray-600 transition hover:text-[#e60073]"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="cursor-pointer whitespace-nowrap rounded-full bg-[#e60073] px-[18px] py-[9px] text-[13px] font-semibold text-white transition hover:bg-[#cc0066]"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>


            {/* Mobile dropdown */}

            {isMenuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-sm md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                onClick={() => setIsMenuOpen(false)}
                                className={`cursor-pointer rounded-lg px-3 py-3 text-sm transition ${index === 0
                                    ? "font-medium text-[#e60073]"
                                    : "text-gray-600 hover:text-[#e60073]"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Navbar;