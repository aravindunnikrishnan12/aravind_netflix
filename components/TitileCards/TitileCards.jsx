import React,{useState,useEffect,useRef} from 'react'
import './TitileCards.css';
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


function TitileCards({title,category}) {

  const [apiData,setApiData]=useState([]);
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTE3MzBlMTI2MWE5YWYyMGMzYzBhMmI4MjZmMGE2NSIsIm5iZiI6MTcyNzA2OTA1Ni42NDA2MzEsInN1YiI6IjY2ZjBmOWI3YzIzNzI1OGU0YzI2NzMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPZZVi6Ee_2mkWuCUNAhVmQzdPZiBZbQAvPsT7chgbM'
    }
  };
  

const handleWheel=(event)=>{
  event.preventdefault();
  cardsRef.current.scrollLeft+=event.deltaY;

}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response =>setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
  
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return (
                        <Link to={`/player/${card.id}`} className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </Link>
                    );
                })}
            </div>
    </div>
  )
}

export default TitileCards;