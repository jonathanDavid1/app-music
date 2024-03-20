import React from 'react';
import { PencilIcon } from '../shared/icons';
import "./PopUpPlaylist.css"
import { useState } from 'react';
import ListCartPlaylist from './ListCartPlaylist';
import { usePlaylistCart } from '../../store/playlistCart';
import { axiosMusic } from '../../config/axios.config';

const PopUpPlaylist = ({isShowCurrentPlaylist}) => {
    const [isShowSideA, setIsShowSideA] = useState(true)
    const tracks = usePlaylistCart(store => store.tracks)
    const clearTracks = usePlaylistCart(store => store.clearTracks)

    const handleSubmit = (e) => {
      e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.tracks = tracks
    axiosMusic
    .post("/api/playlists",data)
    .then(() => {
        e.target.reset()
        clearTracks()
    })
    .catch((err) => console.log(err))
    }

  return (
    <article className={`absolute w-[271.6px] z-10 -bottom-4 translate-y-full grid bg-bg-purple-light p-4 gap-2 rounded-lg border border-yellow-border transition-[right] ${isShowCurrentPlaylist ? "right-4": "-right-full"}`}>
    <form onSubmit={handleSubmit} id='formPlaylistCart' className={`relative card  ${isShowSideA ? "sideA": "sideB"}`}>
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
                onFocus={() => setIsShowSideA(true)} />
                <label htmlFor="">
                <PencilIcon/>
                </label>
            </div>
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
                          onFocus={() => setIsShowSideA(false)}
                           />
                    
                  </div>
              </div>
    </form>
    <button  onClick={() => setIsShowSideA(!isShowSideA)}>
        {
            isShowSideA ? "Lado B":"Lado A"
        }
    </button>
        <ListCartPlaylist tracks ={tracks}/>
    <button form='formPlaylistCart'>Crear</button>
  </article>
  );
}

export default PopUpPlaylist;
