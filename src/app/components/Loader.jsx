/** @jsx jsx */
import { jsx } from "theme-ui";
// import PropTypes from 'prop-types';

import LoadingAnim from "app/assets/loader.gif";
import { Image } from "rebass";

const Loader = ({ loading }) => {
  return (
    loading && (
      <div
        sx={{
          position: "absolute",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          height: "90vh",
          margin: "0 auto",
          width: "100%",
          background: "#fff",
          zIndex: 1,
        }}
      >
        <Image
          src={LoadingAnim}
          sx={{
            width: 80,
            height: "auto",
            margin: "0 auto",
          }}
          alt="Welcome to Hello Fresh"
        />
      </div>
    )
  );
};

// Loader.propTypes = { loading: PropTypes.bool.isRequired };

export default Loader;
