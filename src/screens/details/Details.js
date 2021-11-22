import './Details.css';
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

 const Details = (props) =>{

      async function loadData(id){
            //const moviedata = await  fetch("http://localhost:8085/api/v1/movies/009ae262-a234-11e8-b475-720006ceb890")
            //const movieinformation = await moviedata.json()
            const rawResponse = await  fetch("http://localhost:8085/api/v1/movies/009ae262-a234-11e8-b475-720006ceb890")
            const data = await rawResponse.json()
            setMovieInfo(data)
            debugger;
            console.log(data)
      }

      const[movieInfo,setMovieInfo] = useState([]);
      useEffect( ()=>{
            const movieID = props.match.params.id;
            loadData(movieID);
       },[])

      const artists = movieInfo.artists;


    return (
          <div>
                <Typography className="backtoHome">
          <Link to={"/movie/" + props.match.params.id}>
            &#60; Back to Home
          </Link>
        </Typography>
        <div id="1" className="left-pane"><img src={movieInfo.poster_url}></img></div>
        <div id="2"  className="center-pane"><iframe src={movieInfo.trailer_url}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/></div>
        <div id="3" className="right-pane">{
      //   artists.map((artist)=>{
      //         return( 
      //         <span id={artist.id} key={artist.id}><img src={artist.profile_url}/></span>
      //   )}
      //   )
        }</div>
        HEllo Details</div>
    )
}
export default Details;