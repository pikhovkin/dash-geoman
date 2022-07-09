import {useLeaflet} from "react-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import {useEffect} from "react";

import {propTypes, defaultProps} from '../components/Geoman.react';


function Geoman(props) {
  const context = useLeaflet();

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;
    leafletContainer.pm.addControls();

    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
    };
  }, [context]);

  return <></>
}

export default Geoman;

Geoman.defaultProps = defaultProps;
Geoman.propTypes = propTypes;
