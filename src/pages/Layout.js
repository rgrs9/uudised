import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/" className="active">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout