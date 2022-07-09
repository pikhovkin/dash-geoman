import React, { Suspense } from 'react';
import PropTypes from "prop-types";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";


const LazyGeoman = React.lazy(() => import(/* webpackChunkName: "Geoman" */ '../fragments/Geoman.react'));

const Geoman = (props) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGeoman {...props} />
      </Suspense>
    </div>
  );
}

Geoman.defaultProps = {
    // action: {n_actions: 0},
    // geojson: {type: "FeatureCollection", features: []}
};

Geoman.propTypes = {
    // Dash stuff.

    /**
     * The children of this component (dynamic).
     */
    children: PropTypes.node,

    /**
     * A custom class name to assign to the image. Empty by default.
     */
    className: PropTypes.string,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash events
     */
    setProps: PropTypes.func,

};

export default Geoman;
export const propTypes = Geoman.propTypes;
export const defaultProps = Geoman.defaultProps;
