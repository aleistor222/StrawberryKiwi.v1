"use client"
import React, { useContext, useEffect } from "react";
import { Suspense } from "react"
import Loading from "../app/(Shared)/Loading.jsx";
import {Song} from './Song.jsx';
import { GlobalState } from '../context/state'

export function SongList() {

    const { songs } = useContext(GlobalState);

    if (songs.length == 0) {
        return <Loading />
    }

    return (
        // <Suspense fallback={<Loading />}>
            <div>
                {songs.map((song, songIdx) => {
                    return (
                        <div key={songIdx}>
                            <Song song={song} songIdx={songIdx} />
                        </div>
                    )
                }
                )}
            </div>
        // </Suspense>
    )
}