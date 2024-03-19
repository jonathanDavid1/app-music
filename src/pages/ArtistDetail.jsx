import ContainerMusic from "../components/layout/ContainerMusic";
import { useEffect, useState } from "react";
import { axiosMusic } from "../config/axios.config";
import SlideAlbum from "../components/shared/SlideAlbum";
import { Link, useParams } from "react-router-dom";
import ListTrackDefaul from "../components/shared/ListTrackDefaul";


const ArtistDetail = () => {

  const [artists, setArtists] = useState(null);


  const  {id}  = useParams()
 

  useEffect(() => {
      axiosMusic
      .get(`/api/artists/${id}`)
        .then(({data}) => setArtists(data))
        .catch((err) => console.log(err))
  }, [id])
  return (
    <ContainerMusic>
      <Link to={-1} className="mb-4 block hover:text-yellow-border transitions-colors">Atras</Link>
      <header className="grid gap-4 sm:grid-cols-2 sm:items-center">
        <div className="rounded-xl overflow-hidden sm:rounded-full sm:w-full sm:aspect-square">
          <img className="w-full h-full object-cover" src={artists?.images[1].url} alt="" />
        </div>
        <section>
          <h2 className="text-xl font-semibold line-clamp-1">{artists?.name}</h2>
          <ul>
            <li className="font-light"><span className="font-semibold">Seguidores:</span>{artists?.followers.total}</li>
            <li className="font-light"><span className="font-semibold">Popularidad:</span>{artists?.popularity}</li>
          </ul>
          <section>
            <h4 className="font-semibold">Generos</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {
                artists?.genres.slice(0, 4).map((genre) => <li className="border border-purple-500 p-1 px-2 rounded-full" key={genre}>{genre}</li>)
              }
            </ul>
          </section>
        </section>
      </header>
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Otros album del artista</h3>
          <SlideAlbum albums={artists?.albums ?? []}/>
      </section>
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Las mas sonadas</h3>
        <ListTrackDefaul tracks={artists?.songsTop ?? []}/>
      </section>
    </ContainerMusic>
  );
}

export default ArtistDetail;
