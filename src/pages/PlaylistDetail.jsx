import React, { useEffect, useRef, useState } from 'react';
import ContainerMusic from '../components/layout/ContainerMusic';
import { PencilIcon, SaveIcon, ShareIcon, TrashIcon } from '../components/shared/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { axiosMusic } from '../config/axios.config';
import ListPlaylistDetail from '../components/playlistDetail/ListPlaylistDetail';
const PlaylistDetail = () => {

  const [isShowSideA, setIsShowSideA] = useState(true);
  const [playlistInfo, setPlaylistInfo] = useState(null)

  const { id } = useParams()
  const formRef = useRef(null)
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        axiosMusic
            .patch(`/api/playlists/${id}`, data)
            .then(({data}) => alert("Playlist actualizada correctamente"))
            .catch((err) => console.log(err))

  }

  const handleDeletePlaylists = () => {
    axiosMusic
    .delete(`/api/playlists/${id}`)
    .then(() => {navigate("/playlists")})
    .catch((err) => console.log(err))
  }

  const handleDeleteTrackByPlaylist = (idTrackToDelete) => {
    axiosMusic
    .delete(`/api/playlists/${playlistInfo.id}/tracks/${idTrackToDelete}`)
    .then((data) => {
        const newTracks = playlistInfo.tracks.filter(track => track.id !== idTrackToDelete)
        setPlaylistInfo({...playlistInfo, tracks: newTracks})
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
   axiosMusic
   .get(`/api/playlists/${id}`)
   .then(({data}) => setPlaylistInfo(data))
   .catch((err) => console.log(err))
  

  }, [])
  useEffect(() => {
    if(playlistInfo){
        formRef.current.playlistDetail_title.value = playlistInfo.title
        formRef.current.playlistDetail_to.value = playlistInfo.to
        formRef.current.playlistDetail_title.message = playlistInfo.message

    }
  }, [playlistInfo])
  
  
  return (
    <ContainerMusic>
      <Link to= {-1}>{"<"} Atras</Link>  
    <form
    onSubmit={handleSubmit}
    ref={formRef} 
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
            type='submit'
            className='absolute left-4 bottom-3 border-2 rounded-full p-[3px] hover:border-yellow-border group transition-colors'>
                <SaveIcon/>
            </button>
            <button
            type='button'
            onClick={handleDeletePlaylists}
            className='absolute left-14 bottom-3 border-2 rounded-full p-[3px] hover:border-yellow-border group transition-colors'>
                <TrashIcon />
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
    <ListPlaylistDetail tracks={playlistInfo?.tracks ?? []} handleDeleteTrackByPlaylist={handleDeleteTrackByPlaylist}
    showDeleteBtn
    />
    </ContainerMusic>
  );
}

export default PlaylistDetail;
