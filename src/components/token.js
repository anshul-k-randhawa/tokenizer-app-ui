import React, { useEffect } from "react";

function Token(props) {
  return (
    <div className="pt-2 pb-2 border border-right rounded">
      {props.data.key}
      <br />
      <br />
    </div>
  );
}

export default Token;
