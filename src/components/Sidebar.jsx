import {Link} from "react-router-dom";
function Sidebar(){
    return (<aside className="sidebar">
        <h2>JobTracker</h2>
        <nav>
            <ul>
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/applications'>Applications</Link></li>  
            <li><Link to='/interviews'>Interviews</Link></li> 
            <li><Link to='/offers'>Offers</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
            </ul>
        </nav>
    </aside>)
}

export default Sidebar;