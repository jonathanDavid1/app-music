import { Link, useParams } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic"
import PublicLayout from "../components/layout/PublicLayout"
import { axiosMusic } from "../config/axios.config";
import ListPlaylistDetail from "../components/playlistDetail/ListPlaylistDetail";
import { useEffect, useState } from "react";
import { AddIcon, PencilIcon, SaveIcon, ShareIcon, TrashIcon } from "../components/shared/icons";

const PlaylistShared = () => {

  const [playlistInfo, setPlaylistInfo] = useState(null)
  const [isShowSideA, setIsShowSideA] = useState(true);

  const { id } = useParams()
  

  useEffect(() => {
    axiosMusic
    .get(`/api/playlists/${id}`)
    .then(({data}) => setPlaylistInfo(data))
    .catch((err) => console.log(err))
  }, []);

  return (
    <PublicLayout>
      <ContainerMusic>
      <form
    id='formPlaylistCart' className={`relative w-[238px] mx-auto card  ${isShowSideA ? "sideA": "sideB"}`}>
        {/* Parte frontal (Lado A) */}
        <div className='relative front'>
            <img className='mx-auto' src="/images/cassette.png" alt="" />
            <div className='flex items-center gap-2 bg-white absolute top-4 left-5 rounded-md px-2 w-[195px]'>
                <input              
                className='text-black bg-transparent outline-none p-1 text-sm flex-1' 
                type="text"
                size={10}
                placeholder='Título'
                name='title'
                required
                id='playlistDetail_title'
                onFocus={() => setIsShowSideA(true)} />
                <label htmlFor="">
                <PencilIcon/>
                </label>
            </div>
            <Link to={`/playlists/public/${id}`} 
            target='_blank'
            className='absolute right-5 bottom-3 border-2 rounded-full p-[3px] hover:border-yellow-border group transition-colors'>
                <ShareIcon/>
            </Link>
            <button
            type='button'
            className='absolute right-14 bottom-3 border-2 rounded-full p-[3px] hover:border-yellow-border group transition-colors'>
                <AddIcon />
            </button>

        </div>
        {/* Parte trasera (lado B) */}
              <div className='absolute top-0 left-[3px] back'>
                  <img className='mx-auto' src="/images/cassette.png" alt="" />
                  <div className='flex items-center gap-2 bg-white absolute top-4 left-5 rounded-md px-2 w-[197px]'>
                      <input className='text-black bg-transparent outline-none p-1 text-sm flex-1'
                          type="text"
                          size={10}
                          placeholder='Para'
                          name='to' 
                          required
                          id='playlistDetail_to'
                          onFocus={() => setIsShowSideA(false)}
                          />
                      <label htmlFor="">
                          <PencilIcon />
                      </label>
                  </div>
                  <div className='flex items-center gap-2 bg-white absolute top-12 left-5 rounded-md px-2 w-[197px]'>
                      <textarea 
                      name='message'
                      className='text-black bg-transparent outline-none p-1 text-sm flex-1 resize-none'
                      rows={4}
                          type="text"
                          size={10}
                          placeholder='Dedicatoria'
                          required
                          id='playlistDetail_message'
                          onFocus={() => setIsShowSideA(false)}
                           />
                    
                  </div>
              </div>
    </form>
    <button className='max-w-max mx-auto block my-4' onClick={() => setIsShowSideA(!isShowSideA)}>
        {
            isShowSideA ? "Lado B":"Lado A"
        }
    </button>
      <ListPlaylistDetail 
      tracks={playlistInfo?.tracks ?? []} 
      showPlayBtn
      />
      </ContainerMusic>
    </PublicLayout>
  )
}
export default PlaylistShared