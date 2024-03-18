import React, { useEffect, useState } from 'react'
import ContainerMusic from '../components/layout/ContainerMusic'
import { SearchIcon } from '../components/shared/icons'
import { axiosMusic } from '../config/axios.config'
import { useUserInfo } from '../store/userInfo'
import TrackDefaulCard from '../components/shared/TrackDefaulCard'
import ListTrackDefaul from '../components/shared/ListTrackDefaul'

const Home = () => {
  const [tracksRecomendations, setTracksRecomendations] = useState([])

  const {token} = useUserInfo(state => state.user)

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
          <form className='bg-purple-dark p-2 rounded-md flex gap-2 items-center'>
            <button>
              <SearchIcon/>
              </button>
            <input className='bg-transparent outline-none flex-1' 
            type="text"
            size={10}
            placeholder='Buscar' />
            <select className='bg-transparent outline-none'>
              <option value="10">10</option>
            </select>
          </form>
        </header>

      <ListTrackDefaul tracks = {tracksRecomendations} />
      </ContainerMusic>  
  )
}

export default Home
