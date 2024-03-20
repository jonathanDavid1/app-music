import TrackByPlaylistDetail from "./TrackByPlaylistDetail";

const ListPlaylistDetail = ({tracks, handleDeleteTrackByPlaylist}) => {
  return (
    <section className="grid gap-2">
      {
      tracks.map((track) => (<TrackByPlaylistDetail key={track.id} track={track} handleDeleteTrackByPlaylist={handleDeleteTrackByPlaylist}/>))
      }
    </section>
  );
}

export default ListPlaylistDetail;
