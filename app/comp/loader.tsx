import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = (loading: boolean) => {
  const color = "white";
  return (
    <div>
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
