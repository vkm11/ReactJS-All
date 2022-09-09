import {Link} from "react-router-dom"
function Home()
{
    return(
        <div>
            <h1>Home Page</h1>
            <p>This is a Home Page</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}
export default Home;
