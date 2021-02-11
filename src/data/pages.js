import PopularMovies from "../components/PopularMovies"
import SignUp from "../components/SignUp"
import Login from "../components/Login"



const pages = [{
    "title": "PopularMovies",
    "exact": true,
    "component": PopularMovies,
    "link": "/",
    "isActive": true
},
{
    "title": "SignUp",
    "exact": false,
    "component": SignUp,
    "link": "/signup",
    "isActive": true
},
{
    "title": "Login",
    "exact": false,
    "component": Login,
    "link": "/login",
    "isActive": true
}
]

export default pages;