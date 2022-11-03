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
            <Link to="/instructors" className="nav-link text-white">
                Instructors
                </Link>
            </li>
            <li>
            <Link to="/students" className="nav-link text-white">
                Students
                </Link>
            </li>
            <li>
            <Link to="/courses" className="nav-link text-white">
                Courses
                </Link>
            </li>
            <li>
            <Link to="/" className="nav-link text-white">
            Logout
            </Link>
            </li>
        </ul>
    </div>
    )
}