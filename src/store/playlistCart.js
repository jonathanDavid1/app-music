import { create } from "zustand";

export  const usePlaylistCart = create((set, get) => ({
    info: {
        title: "",
        message: "",
        to:""
    },
    tracks: [],
    addTrack: (newTrack) => {
        const {tracks} = get() 
        const isTrackAlreadyAdded = tracks.some(
            (track) => track.id === newTrack.id);
            if(isTrackAlreadyAdded) return
            const newTracks = [...tracks, newTrack]
            set(({tracks: newTracks}))
    }
}));


