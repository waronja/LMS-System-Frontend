import { Link } from 'react-router-dom';
import './StSideMenu.css'


export default function InSideMenu() {
    return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px', minHeight:'800px'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">LMS</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li>
                <Link to="/stdashboard" className="nav-link text-white">
                 Home
                </Link>
                 <Link to="/" className="nav-link text-white">
                 Logout
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