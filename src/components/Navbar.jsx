import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart, HiHome } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const navigation = [
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const isPage = "a dashboard"; // is page declaration (temporary)

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { currentUser, logout } = useAuth();
    const token = localStorage.getItem("token");

    const handleLogOut = () => {
        logout();
    };

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* Left Section */}
                <div className="flex items-center gap-4 md:gap-6">
                    {isPage !== "dashboard" && (
                        <Link to="/">
                            <HiHome className="button" />
                        </Link>
                    )}

                    {/* Website Name */}
                    <span className="text-3xl font-bold text-gray-800">SCRAPCO</span>

                    {/* Search Bar */}
                    <div className="relative w-48 sm:w-72">
                        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="bg-gray-200 w-full py-2 pl-10 pr-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    {currentUser ? (
                        <div className="relative">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img
                                    src={"124"}
                                    alt="User Avatar"
                                    className="size-7 rounded-full ring-2 ring-blue-500 cursor-pointer"
                                />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                    <ul className="py-2">
                                        {navigation.map((item) => (
                                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                <Link
                                                    to={item.href}
                                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : token ? (
                        <Link to="/dashboard" className="border-b-2 border-primary text-primary">
                            Dashboard
                        </Link>
                    ) : (
                        <Link to="/login">
                            {isPage !== "login" && <HiOutlineUser className="button" />}
                        </Link>
                    )}

                    <Link to="/cart" style= {{display:'flex'
                    }}>
                        <HiOutlineShoppingCart className="cart"/>
                        
                            <span >
                                {cartItems.length > 0 ? cartItems.length : 0}
                            </span>
                        
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
