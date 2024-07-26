import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export const Navbar = () => {

    // abrir y cerrar menu

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // enlaces

    const navItems = [
        { path: "/", link: "Inicio" },
        { path: "/services", link: "Servicios" },
        { path: "/about", link: "Nosotros" },
        { path: "/posts", link: "Publicaciones" },
        { path: "/contact", link: "Contactanos" }
    ]

    return (
        <header className="bg-bgprimary text-white">
            <nav className="p-5 h-[4.2rem] sm:px-8 max-w-7xl mx-auto flex justify-between items-center">

                <div className="flex gap-10">

                    <a className="text-xl font-bold text-white" href="/">Blog de Noticias</a>

                    {/* para pc */}

                    <ul className="lg:flex gap-8 text-lg hidden">
                        {
                            navItems.map(({path, link}) => 
                                <li className="text-white" key={path}>
                                    <NavLink className={({ isActive, isPending }) =>
                                        isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                    }to={path}>{link}</NavLink>
                                </li>
                            )
                        }
                    </ul>

                </div>
                


                <div className="flex gap-8 items-center">

                    <div className="md:flex items-center gap-2 hidden">
                        <button className="bg-bgsecondary text-ftsecondary hover:bg-bgprimary border border-slate-200 rounded-full px-3 py-1">
                            Log in
                        </button>
                        <button className="bg-bgtertiary text-white hover:bg-bgprimary border border-slate-200 rounded-full px-3 py-1">
                            Sign up
                        </button>
                    </div>



                    <div className="lg:hidden">

                        <button onClick={toggleMenu} className="cursor-pointer">
                            {
                                isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />
                            }
                            
                        </button>
                        
                    </div>

                </div>


            </nav>

            {/* para movil */}

            <div>
                <ul className={`lg:hidden gap-12 text-lg block space-y-4 px-5 sm:px-8 py-6 bg-bgprimary ${isMenuOpen ? "" : "hidden"}`}>
                    {
                        navItems.map(({path, link}) => 
                            <li className="text-white" key={path}>
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>



        </header>
    )
}
