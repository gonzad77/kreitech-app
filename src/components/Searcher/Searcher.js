import { useState } from "react";

import './Searcher.css'
import loupe from '../../assets/img/loupe.svg' 

const Searcher = ({ handleSubmit }) => {

    const [searchText, setSearchText] = useState("");

    const updateSearchInput = e => {
        setSearchText((prevState) => prevState = e.target.value);
    };

    return <div className="searcher">
        <form onSubmit={e => handleSubmit(e, searchText)}>
            <div className="row row-searcher">
                <div className="col-10">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search in Spotify"
                        name="search-bar"
                        onChange={updateSearchInput}
                    />
                </div>
                <div className="col-2">
                    <button type="submit" disabled={!searchText.trim()}>
                        <img className="loupe" src={loupe} alt="Buscar"></img>
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default Searcher;