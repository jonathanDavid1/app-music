import React, { useEffect } from 'react'
import ContainerMusic from '../components/layout/ContainerMusic'
import { SearchIcon } from '../components/shared/icons'
import { axiosMusic } from '../config/axios.config'
import { useUserInfo } from '../store/userInfo'

const Home = () => {

  const {token} = useUserInfo(state => state.user)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `JWT ${token}`
      },
    };
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton, salsa", config)
      .then(({data}) => console.log(data))
      .catch((err) => console.log(err))
  },[])

  useEffect(() => {
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
  }, [])
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
      </ContainerMusic>  
  )
}

export default Home
