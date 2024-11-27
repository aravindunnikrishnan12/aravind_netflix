import React, { useEffect,useState } from 'react';
import './Player.css';
import back_arrow_iocn from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";



function Player() {

  const { id } = useParams();
  const navigate = useNavigate()
   
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
});

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTE3MzBlMTI2MWE5YWYyMGMzYzBhMmI4MjZmMGE2NSIsIm5iZiI6MTcyNzA2OTA1Ni42NDA2MzEsInN1YiI6IjY2ZjBmOWI3YzIzNzI1OGU0YzI2NzMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPZZVi6Ee_2mkWuCUNAhVmQzdPZiBZbQAvPsT7chgbM'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])



  return (
    <div className="player">
    <img src={back_arrow_iocn} alt="" onClick={()=>{navigate(-1)}} />
    <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
    ></iframe>
    <div className="played-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
    </div>
</div>
  )
}

export default Player