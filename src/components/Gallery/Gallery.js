import './Gallery.css'

const Gallery = (props) => {

    const { tracks } = props;

    return <div className="row">
        { 
            tracks.map((track, i) => 
                (<div className="col-4 col-mobile-gallery" key={i}>
                    <div className="track-content">
                        <p className="track-name">{track.name}</p>
                        <p className="track-artists"><b>Artists</b>: <span>
                                { track.artists.map((artist, index) => 
                                    (index+1 === track.artists.length) ?  ` ${artist.name}` : ` ${artist.name},`
                                )}
                            </span>
                        </p>
                        <p><b>Duration</b>: {(track.duration_ms / 100000).toFixed(2)} min</p>
                        <a className="link" href={track.external_urls.spotify} target='_blank' rel="noreferrer">Listen</a>
                    </div>
                </div>)
            )
        }
    </div>
}

export default Gallery;