import { Link, Outlet } from "react-router-dom";


const About = () =>{
    return (
        <div>
            about
            <Link to={"profile"} >click for profile</Link>
        <Outlet/>
        </div>
        
    );
}
export default About;