import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { makeStyles } from "@material-ui/core";
import config from "../../config";

mapboxgl.accessToken = config.mapBoxToken;

const useStyles = makeStyles((theme) => ({
  map: {
    height: "100%",
    position: "relative",
  },
  mapContainer: {
    height: "100%",
  },
  sideBar: {
    backgroundColor: "rgba(35, 55, 75, 0.9)",
    color: "#ffffff",
    padding: "6px 12px",
    fontFamily: "monospace",
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    margin: 12,
    borderRadius: 4,
  },
}));

const fetchGeoCode = (address) => {
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/country=de&${address}.json?access_token=${mapboxgl.accessToken}`
  )
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.features)
    .then((features) => features[0].geometry);
};

const Map = ({ address }) => {
  const classes = useStyles();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(13.38333);
  const [lat, setLat] = useState(52.51667);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    fetchGeoCode(address).then((geometry) => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: geometry.coordinates,
        zoom: zoom,
      });
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className={classes.map}>
      <div className={classes.sideBar}>
        Longitude: {lng} | Latitude: {lat}
      </div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </div>
  );
};

export default Map;
