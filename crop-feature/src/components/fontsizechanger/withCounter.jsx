import React from "react";

const UpdatedComponent = (OriginalComponent) => {

function NewComponent(props) {
    //render OriginalComponent and pass on its props.
    return <OriginalComponent name="Raveen" />;
  }
  return NewComponent;
};
export default UpdatedComponent;