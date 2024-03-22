import TrackByPlaylistDetail from "./TrackByPlaylistDetail";

const ListPlaylistDetail = ({tracks, handleDeleteTrackByPlaylist, showPlayBtn, showDeleteBtn}) => {


  return (
    <section className="grid gap-2">
      {
      tracks.map((track) => (<TrackByPlaylistDetail key={track.id} track={track} handleDeleteTrackByPlaylist={handleDeleteTrackByPlaylist}
      showDeleteBtn={showDeleteBtn}
      showPlayBtn={showPlayBtn}
      />))
      }
    </section>
  );
}

export default ListPlaylistDetail;
