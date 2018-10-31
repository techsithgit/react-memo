import React from "react";

export default React.memo(props => {
  console.log("val =", props.val);
  return <div>{props.val}</div>;
});
