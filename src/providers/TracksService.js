import React, { createContext, useState } from "react";
import axios from "axios";
import config from '../config.json'

export const TrackContext = createContext();

const TrackService = (props) => {

    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    const search = async (query, url) => {
      setLoading(true);
      const access_token = localStorage.getItem('access_token');
      if( !access_token ) {
        alert("Try to get token first");
        setTracks([]);
        setError(true);
        setLoading(false);
      } else {
        try {
          const res = await axios.get(url ? url : `${config.base_url}search?query=${query}&offset=0&limit=12&type=track`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
          });
          const tracks = res.data.tracks;
          setTracks(tracks.items)
          setNext(tracks.next);
          setPrevious(tracks.previous);
          setLoading(false);
        } catch (e) {
          alert(e.message);
          setTracks([]);
          setError(true);
          setLoading(false);
        }
      }
    }

    const saveToken = () => {
      const localStorage = window.localStorage;
      const paramsHash = window.location.hash;
      if(paramsHash !== '') {
        const params = getParamsValue(paramsHash);
        if (params.access_token) localStorage.setItem('access_token', params.access_token);
      }
    }
    
      const getParamsValue = (hash) => {
        return hash.slice(1).split('&').reduce((prev,curr) =>{
          const [title, value] = curr.split('=');
          prev[title] = value;
          return prev;
        }, {})
      }
    
    return (
        <TrackContext.Provider value={{ 
          tracks, 
          loading, 
          error,
          next,
          previous,
          search, 
          saveToken 
        }}>
          {props.children}
        </TrackContext.Provider>
    );
}

export default TrackService;