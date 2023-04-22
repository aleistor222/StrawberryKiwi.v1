export async function Song(song) {

    return (
        <div className="flex flex-row my-1 rounded-lg bg-white shadow-xl">
            <div className="basis-1/12 relative z-0 self-center" id="clickable">
                <img
                    className='object-contain rounded-lg'
                    src={song.images[0].src}
                    alt={song.title}
                    id="clickable"
                    onClick={handleClick}
                />
            </div>
            <div className="basis-6/12 text text-left flex self-center" id="clickable">
                {song.title}
            </div>
            <div className="basis-2/12 flex self-center">
                <div className="w-full flex flex-col">
                    <button className="button" value='add' onClick={handleButton}>Vote</button>
                </div>
            </div>
        </div>
    )
}