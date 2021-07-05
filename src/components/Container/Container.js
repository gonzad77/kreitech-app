import './Container.css'
import { useContext, useEffect } from "react";
import { TrackContext } from '../../providers/TracksService';

import Loader from '../Loader/Loader';
import Gallery from '../Gallery/Gallery';

const Container = ({ searchText }) => {

    const { search, tracks, loading, error, next, previous } = useContext(TrackContext);

    useEffect(() => {
      search(searchText, null);
    }, [searchText]);

    return <div className="container">
      { error ? <h2>An error has occurred.<br/>Try to get new token.</h2> : <h2>Results of {searchText}:</h2>}
     
      {loading ? <Loader /> : <Gallery tracks={tracks} /> }

      { !error && !loading && <div className="buttons">
          <button className="button-footer" disabled={!previous} onClick={() => search(searchText, previous)}>
            Previous
          </button>
          <button className="button-footer" disabled={!next} onClick={() => search(searchText, next)}>
            Next
          </button>
        </div>
      }
    </div>
}

export default Container;