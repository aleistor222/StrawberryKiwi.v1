import React, { useEffect, useState } from "react";
import useAuth from "@/functions/useAuth";

import SpotifyWebApi from 'spotify-web-api-node';
const spotifyApiKey = process.env.SPOTIFY_CLIENT_ID

const spotifyApi = new SpotifyWebApi({
    clientId: spotifyApiKey
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image
                            return smallest
                        },
                        track.album.images[0]
                    )

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    }
                })
            )
        })
        return () => (cancel = true)
    }, [search, accessToken])


    return (
        <div className="page">
            <input
                type="text"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex flex-col">
                {searchResults.map(track => (
                    <div>
                        {track.title}
                    </div>
                ))}
            </div>
        </div>
    )
}
