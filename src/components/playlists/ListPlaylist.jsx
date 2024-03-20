import PlaylistCard from "./PlaylistCard";

const ListPlaylist = ({playlists}) => {

    const quantityCassettes = playlists.length;
    const HEIGHT_CASSETE = 180;
    const DISTANCE_DIFFERENT = 54;
    const heightContainer = (quantityCassettes -1) * DISTANCE_DIFFERENT + HEIGHT_CASSETE

  return (
    <section className="w-[256px] mx-auto mt-10 relative" style={{height: `${heightContainer}px`}}>
      {
        playlists.map((playlist, index) => <PlaylistCard key={playlist.id} playlist={playlist} index={index}/>)
      }
    </section>
  );
}

export default ListPlaylist;
