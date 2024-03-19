import React from 'react';
import { Link } from 'react-router-dom';

const TrackPlaylistCart = ({track}) => {
  return (
<article key={track.id} className="flex items-center gap-2 hover:bg-white/30 p-1 rounded-md pr-2 transition-colors">
        <header className="rounded-md overflow-hidden">
            <img src={track.album.images[2].url} alt="" />
        </header>
        <section className="flex-1 text-sm sm:text-base">
            <Link to= {`../tracks/${track.id}`} className="font-semibold line-clamp-1">{track.name}</Link>
            <Link to= {`../artists/${track.artists[0].id}`} className="text-slate-400 font-light line-clamp-1">{track.artists[0].name}</Link>
        </section>

        <section className="flex items-center gap-2">
         
        </section>
    </article>
  );
}

export default TrackPlaylistCart;
