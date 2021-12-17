import GoogleMapReact from 'google-map-react';
import Head from 'next/head';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Contact = () => {
  const defaultProps = {
    center: {
      lat: 44.437357277140066,
      lng: 26.13427340215661,
    },
    zoom: 11,
  };

  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={44.437357277140066}
            lng={26.13427340215661}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Contact;
