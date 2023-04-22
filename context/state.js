import React, { createContext, useState } from "react";

const GlobalState = React.createContext();

function GlobalProvider({ children }) {
  const [songs, setSongs] = useState([])
  const [authenticated, setAuthenticated] = useState(false)
  const [search, setSearch] = useState('')

  const fetchSongs = async (search) => {
    console.log("FETCH SONGS")
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search: search })
      })
      const fetchedSongs = await response.json()
      setSongs(fetchedSongs)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <GlobalState.Provider
      value={{
        songs, setSongs, fetchSongs,
        authenticated, setAuthenticated,
        search, setSearch
      }}>
      {children}
    </GlobalState.Provider>
  );
}

const GlobalConsumer = GlobalState.Consumer;
export { GlobalConsumer, GlobalState };

export default GlobalProvider;

