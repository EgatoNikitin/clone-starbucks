/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {Header} from '../../componentns/Header/Header';
import {Footer} from '../../componentns/Footer/Footer';
import mapboxgl from '!mapbox-gl';
import {useEffect, useRef, useState} from 'react';
import './FindStore.scss';
import icon from '../../imgs/search-icon.png';

// eslint-disable-next-line max-len
mapboxgl.accessToken = 'pk.eyJ1IjoidWxhZHppc2xhdWt1dGFya2luIiwiYSI6ImNsOWlxaXpqcjBzdGwzdm8wc3hiMm54bmgifQ.ls-C6QqaLgKpapbaZYeI-w';
export const FindStore = ()=>{
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(41.63);
  const [lat, setLat] = useState(-41.6);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(()=>{
    if (!map.current) return; // wait for map to initialize
    map.current.jumpTo({
      center: [lng, lat],
    });
  }, [lat, lng]);

  useEffect(()=>{
    const successCallback = (position) => {
      setLng(position.coords.longitude.toFixed(4));
      setLat(position.coords.latitude.toFixed(4));
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <>
      <Header/>
      <div className='findstore-wrapper'>
        <div className='search-wrapper'>
          <div className='input-wrapper'>
            <input type='text' placeholder='Find a store'/>
            <img src={icon}/>
          </div>
          <h2>No stores were found.</h2>
          <h4>Do you want to look further away?</h4>
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>

    </>
  );
};
