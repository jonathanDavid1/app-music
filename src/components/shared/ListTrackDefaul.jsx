import TrackDefaulCard from "./TrackDefaulCard";

const ListTrackDefaul = ({tracks}) => {
  return (
    <section className="grid gap-2 pt-6">
    {
      tracks.map((track) => (
        <TrackDefaulCard key={track.id} track={track} />
      ))
    }
  </section>
  );
}

export default ListTrackDefaul;
