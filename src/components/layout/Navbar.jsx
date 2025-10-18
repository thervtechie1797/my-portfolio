import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    Rohit Verma
                </Link>
            
                <div className="space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
                    <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
                </div>
            </div>
        </nav>
    )
}