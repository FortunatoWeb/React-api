import { Link } from "react-router-dom";
const Navbar = (props) => {
    //const name = props.name;
    return (
        <nav className=" mb-10 shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="relative flex items-center justify-between h-16">
                        <Link className="bg-gray-200 text-gray-500 px-5 py-2 rounded-xl shadow hover:bg-gray-100 mr-4" to="/">Home</Link>
                        <Link className="bg-gray-200 text-gray-500 px-5 py-2 rounded-xl shadow hover:bg-gray-100 mr-4" to="/posts">Posts</Link>
                    </div>
                    <div className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
