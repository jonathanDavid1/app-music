import { useParams } from "react-router-dom";
import ContainerMusic from "../components/layout/ContainerMusic";
import { useEffect, useState } from "react";
import { axiosMusic } from "../config/axios.config";
import SlideAlbum from "../components/shared/SlideAlbum";


const ArtistDetail = () => {

  const [artists, setArtists] = useState(null)

  const { id } = useParams()

  useEffect(() => {
      axiosMusic
        .get(`/api/artists/0TnOYISbd1XYRBk9myaseg`)
        .then(({data}) => setArtists(data))
        .catch((err) => console.log(err))
  }, [])
  return (
    <ContainerMusic>
      <header>
        info del artista
      </header>
      <section>
        <h3>Otros album del artista</h3>
          <SlideAlbum albums={artists?.albums ?? []}/>
      </section>
      <section>
        canciones relacionadas
      </section>
    </ContainerMusic>
  );
}

export default ArtistDetail;
