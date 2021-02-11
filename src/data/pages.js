import PopularMovies from "../components/PopularMovies"
import NowPlaying from "../components/NowPlaying"
import Upcoming from "../components/Upcoming"



const pages = [{
    "title": "PopularMovies",
    "exact": true,
    "component": PopularMovies,
    "link": "/",
    "isActive": true
},
{
    "title": "NowPlaying",
    "exact": false,
    "component": NowPlaying,
    "link": "/nowplaying",
    "isActive": true
},
{
    "title": "Upcoming",
    "exact": false,
    "component": Upcoming,
    "link": "/upcoming",
    "isActive": true
}
]

export default pages;