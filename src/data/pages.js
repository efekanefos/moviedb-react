import PopularMovies from "../components/PopularMovies"
import NowPlaying from "../components/NowPlaying"
import Upcoming from "../components/Upcoming"
import Search from "../components/Search"
import MovieDetail from "../components/Movies/MovieDetail";



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
},
{
    "title": "MovieDetail",
    "exact": false,
    "component": MovieDetail,
    "link": "/movies/:movieID",
    "isActive": false
},
{
    "title": "Search",
    "exact": false,
    "component": Search,
    "link": "/search",
    "isActive": true
}
]

export default pages;