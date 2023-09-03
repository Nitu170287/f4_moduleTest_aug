import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DisplayHistory = () => {
  const history = useSelector((state) => state.history);

  return (
    <div>
      {/* {JSON.stringify(history)} */}
      <h1>Search History</h1>
      {[].concat(history).map((h,ind) => (
        <div key={"h-"+ind}>
        <Link to={"/word/"+h.word}>{h.word}</Link>
          
        </div>
      ))}
    </div>
  );
};

export default DisplayHistory;
