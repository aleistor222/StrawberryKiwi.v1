import React, { useEffect } from 'react';
import { SongList } from './SongList.jsx';
import { SearchBar } from './SearchBar.jsx';

export default function HomePage() {

    // useEffect(() => {
    //    
    // }, [])

    return (
        <div className='page flex flex-col'>
            <div className='text-title'>
                Shuffle
            </div>
            <div>
                {/* <input type="text" placeholder="Search Songs/Artists" /> */}
                <SearchBar />
            </div>
            <div>
                <SongList />
            </div>
        </div>
    )
}