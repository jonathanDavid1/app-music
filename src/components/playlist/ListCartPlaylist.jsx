import TrackPlaylistCart from "./TrackPlaylistCart";

const ListCartPlaylist = ({tracks}) => {
  return (
    <section>
      {
        tracks.map((track) => <TrackPlaylistCart key={track.id} track={track}/>)
      }
    </section>
  );
}

export default ListCartPlaylist;
