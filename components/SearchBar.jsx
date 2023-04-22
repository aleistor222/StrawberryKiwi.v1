import { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../context/state'

export function SearchBar() {
    const { fetchSongs } = useContext(GlobalState)
    const [search, setSearch] = useState('')
    return (
        <div>
            <input type="text" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={() => fetchSongs(search)}>Search</button>
        </div>
    )
}