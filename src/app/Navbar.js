import React from "react"

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white">
                <div className=" mx-auto px-4 sm:px lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href='/' className="text-black">
                                    Logo
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a
                                    href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                                    Home
                                </a>
                                <a
                                    href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                                    Abaut
                                </a>
                                <a
                                    href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                                    Profil
                                </a>
                                <a
                                    href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                                    Struktur
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar