import {Link} from 'react-router-dom'
function About()
{
    return(
        <div>
            <h1>About Page</h1>
             <p>This is a About Page</p>
            <Link to="/about">Go to About Page</Link>
        </div>
    )
}
export default About;
