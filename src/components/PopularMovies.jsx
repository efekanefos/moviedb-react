import React, {useState, useEffect} from "react";

export default function PopularMovies(){
    const [movies, setMovies] = useState()
    useEffect(() => {
        getPopular();
    }, [])

    function getPopular(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ed31b81064e7c617fa201d727de6c48c&language=en-US&page=1").then(response => response.json()).then(json => setMovies(json)).catch(err => console.log(err));
        console.log("calisti")
    }

    return(
        <div>
            <h1>hello</h1>
            <h2>efe</h2>
        </div>
    )



}