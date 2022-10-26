import { Link } from 'react-router-dom';
import './SideMenu.css';

export default function SideMenu() {
    return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">LMS</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li>
                <Link to="/dashboard" className="nav-link text-white">
                Dashboard
                </Link>
            </li>
            <li>
            <Link to="/users" className="nav-link text-white">
                Users
                </Link>
            </li>
        </ul>
    </div>
    )
}