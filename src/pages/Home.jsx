import React, { useEffect, useState } from 'react'
import ContainerMusic from '../components/layout/ContainerMusic'
import { SearchIcon } from '../components/shared/icons'
import { axiosMusic } from '../config/axios.config'
import ListTrackDefaul from '../components/shared/ListTrackDefaul'


const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [tracksRecomendations, setTracksRecomendations] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
      const query = e.target["home-querySearch"].value;
      if(query === "") setSearchResults([])
      axiosMusic 
        .get(`/api/tracks?limit=10&q=${query}`)
        .then(({data}) => setSearchResults(data.tracks.items))
        .catch((err) => console.log(err))
  }

  const tracksToShow = searchResults.length === 0 ? tracksRecomendations: searchResults;


  useEffect(() => {
 
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton, salsa")
      .then(({data}) => setTracksRecomendations(data.tracks))
      .catch((err) => console.log(err))
  },[])

/*   useEffect(() => {
    const config = {
      headers: {
        Authorization: `JWT ${token}`
      },
    };

    //rock-n-roll, salsa

    axiosMusic
    .get("/api/genres", config)
    .then(({data}) => console.log(data))
    .catch((err) => console.log(err))
  }, []) */
  return (
      <ContainerMusic>
        <header className='text-lg'>
          <form
          onSubmit={handleSubmit} 
          className='bg-purple-dark p-2 rounded-md flex gap-2 items-center'>
            <button>
              <SearchIcon/>
              </button>
            <input
            id='home-querySearch'
            className='bg-transparent outline-none flex-1' 
            type="text"
            size={10}
            autoComplete='off'
            placeholder='Buscar' />
            <select className='bg-transparent outline-none'>
              <option value="10">10</option>
            </select>
          </form>
        </header>

      <ListTrackDefaul tracks = {tracksToShow} />
      </ContainerMusic>  
  )
}

export default Home
